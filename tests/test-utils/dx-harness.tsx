import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'
import type { ElementType, ReactNode } from 'react'
import { render } from './render'

export type DXAbstractionManifest = {
  name: string
  Component: ElementType
  defaultProps: Record<string, any>
  children: ReactNode
  testSlot: string // e.g., 'itemIndicator'
  testSlotProp: string // e.g., 'itemTrigger'
}

export type DXManifest = {
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
  describe(`${manifest.name}: DX Contract`, () => {
    afterEach(cleanup)

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

    if (manifest.abstractions) {
      manifest.abstractions.forEach((abs) => {
        describe(`Abstraction: ${abs.name}`, () => {
          test('renders the abstraction out of the box', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component {...abs.defaultProps}>{abs.children}</abs.Component>
              </manifest.Root>,
            )
            expect(screen.getByText('Content body')).toBeDefined()
          })

          test('slotProps injects DOM attributes without rewriting the tree', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component
                  {...abs.defaultProps}
                  slotProps={{
                    [abs.testSlotProp]: {
                      'data-testid': 'qa-injected-trigger',
                      'aria-describedby': 'custom-desc',
                    },
                  }}
                >
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )

            const trigger = screen.getByTestId('qa-injected-trigger')
            expect(trigger).toBeDefined()
            expect(trigger.getAttribute('aria-describedby')).toBe('custom-desc')
          })

          test('slots replace internal nodes while retaining Ark accessibility via asChild', () => {
            render(
              <manifest.Root {...manifest.defaultRootProps}>
                <abs.Component
                  {...abs.defaultProps}
                  slots={{
                    [abs.testSlot]: <svg data-testid="custom-svg-slot" />,
                  }}
                >
                  {abs.children}
                </abs.Component>
              </manifest.Root>,
            )

            const customIcon = screen.getByTestId('custom-svg-slot')
            expect(customIcon).toBeDefined()
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
                <abs.Component {...abs.defaultProps}>{abs.children}</abs.Component>
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
