import { afterEach, describe, expect, test } from 'bun:test'
import { cleanup, screen } from '@testing-library/react'
import { render } from './render' // Your custom render with CerberusProvider
import type { ElementType, ReactNode } from 'react'

export interface DXAbstractionManifest {
  name: string
  Component: ElementType
  defaultProps: Record<string, any>
  children: ReactNode
  /** The primitive part to test for non-destructive prop patching (e.g., Accordion.ItemTrigger) */
  PartToPatch: ElementType
  /** The primitive part to test for full content/DOM replacement (e.g., Accordion.ItemIndicator) */
  PartToReplace: ElementType
}

export interface DXManifest {
  name: string
  Root: ElementType
  defaultRootProps?: Record<string, any>
  primitiveTestNode?: ReactNode
  abstractions?: DXAbstractionManifest[]
}

/**
 * Generates the standard Cerberus v2 DX Contract test suite.
 */
export function describeDXContract(manifest: DXManifest) {
  describe(`${manifest.name} v2 DX Contract`, () => {
    afterEach(cleanup)

    // --- 1. Primitive Tests ---
    if (manifest.primitiveTestNode) {
      test('renders the primitives out of the box', () => {
        render(
          <manifest.Root {...manifest.defaultRootProps}>
            {manifest.primitiveTestNode}
          </manifest.Root>,
        )
        expect(screen.getByTestId('primitive-content')).toBeDefined()
      })
    }

    // --- 2. Abstraction Tests ---
    if (manifest.abstractions) {
      manifest.abstractions.forEach((abs) => {
        describe(`Abstraction: ${abs.name}`, () => {
          test('renders the abstraction out of the box', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component {...abs.defaultProps}>
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )
            // Assumes standard text content is provided in `abs.children` or `abs.defaultProps.heading`
            expect(screen.getByText(/Content body/i)).toBeDefined()
          })

          test('JSX child overrides inject DOM attributes without wiping out default content', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component {...abs.defaultProps}>
                  {/* Empty self-closing tag triggers a prop-patch via extractParts */}
                  <abs.PartToPatch
                    data-testid="qa-patched"
                    aria-describedby="custom-desc"
                  />
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )

            const patchedNode = screen.getByTestId('qa-patched')
            expect(patchedNode).toBeDefined()
            expect(patchedNode.getAttribute('aria-describedby')).toBe(
              'custom-desc',
            )
          })

          test('JSX child overrides replace internal nodes while retaining Ark accessibility via asChild', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component {...abs.defaultProps}>
                  {/* asChild unstyled triggers full DOM replacement */}
                  <abs.PartToReplace asChild unstyled>
                    <svg data-testid="custom-svg-slot" />
                  </abs.PartToReplace>
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )

            const customIcon = screen.getByTestId('custom-svg-slot')
            expect(customIcon).toBeDefined()
            // Asserts Ark UI correctly bridged the underlying Zag state machine to the custom SVG
            expect(customIcon.hasAttribute('data-part')).toBe(true)
            expect(customIcon.hasAttribute('data-scope')).toBe(true)
          })

          test('unstyled on the root cascades and strips Cerberus classes', () => {
            render(
              <manifest.Root
                {...manifest.defaultRootProps}
                unstyled
                data-testid="test-root"
              >
                <abs.Component {...abs.defaultProps}>
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )

            const root = screen.getByTestId('test-root')
            const expectedClassName = `cerberus-${manifest.name.toLowerCase()}`
            expect(root.className).not.toInclude(expectedClassName)
          })
        })
      })
    }
  })
}
