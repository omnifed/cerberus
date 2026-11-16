import {
  Children,
  Fragment,
  isValidElement,
  type ComponentProps,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from 'react'

export type ExtractedParts<TParts extends Record<string, ElementType>> = {
  [K in keyof TParts]?: ComponentProps<TParts[K]>
}

export interface ExtractPartsResult<
  TParts extends Record<string, ElementType>,
> {
  /**
   * Prop objects extracted from direct primitive part children.
   * - Empty self-closing parts (e.g. `<Accordion.ItemTrigger data-testid="qa" />`)
   *   have `children === undefined` and act as non-destructive prop patches.
   * - Parts with `children` or `asChild` replace the default inner content/DOM.
   */
  parts: ExtractedParts<TParts>
  /**
   * All remaining non-part children (text, elements, nested components)
   * to render in the abstraction's default content slot.
   */
  content: ReactNode
}

/**
 * Unwraps top-level `React.Fragment` wrappers without recursing into
 * non-Fragment element trees. This guarantees nested instances of the
 * same component (e.g. an Accordion inside an Accordion) are never claimed.
 */
function flattenFragments(children: ReactNode): ReactNode[] {
  const result: ReactNode[] = []

  Children.forEach(children, (child) => {
    if (
      isValidElement<{ children?: ReactNode }>(child) &&
      child.type === Fragment
    ) {
      result.push(...flattenFragments(child.props.children))
    } else {
      result.push(child)
    }
  })

  return result
}

/**
 * Extracts direct primitive part overrides from `children` while preserving
 * all remaining children as `content`.
 *
 * - Zero React Contexts, zero wrapper fibers, and zero hooks (RSC-safe).
 * - Preserves full TypeScript prop types per part from `PARTS`.
 */
export function extractParts<TParts extends Record<string, ElementType>>(
  children: ReactNode,
  partMap: TParts,
): ExtractPartsResult<TParts> {
  if (children == null || typeof children === 'boolean') {
    return { parts: {}, content: undefined }
  }

  const typeToKey = new Map<ElementType, keyof TParts>()
  for (const key in partMap) {
    if (Object.prototype.hasOwnProperty.call(partMap, key)) {
      typeToKey.set(partMap[key], key)
    }
  }

  const extracted: ExtractedParts<TParts> = {}
  const remaining: ReactNode[] = []

  for (const child of flattenFragments(children)) {
    if (isValidElement(child)) {
      const matchedKey = typeToKey.get(child.type as ElementType)

      if (matchedKey !== undefined) {
        const element = child as ReactElement<Record<string, unknown>>
        const existing = extracted[matchedKey] as
          | Record<string, unknown>
          | undefined

        extracted[matchedKey] = (
          existing ? { ...existing, ...element.props } : { ...element.props }
        ) as ComponentProps<TParts[typeof matchedKey]>
        continue
      }
    }

    remaining.push(child)
  }

  const content =
    remaining.length === 0
      ? undefined
      : remaining.length === 1
        ? remaining[0]
        : remaining

  return { parts: extracted, content }
}
