import type { ReactNode } from 'react'

export interface ForProps<T> {
  /**
   * The array to iterate over
   */
  each: T[]
  /**
   * The fallback content to render when the array is empty
   */
  fallback?: ReactNode
  /**
   * The render function to render each item in the array
   */
  children: (item: Exclude<T, undefined>, index: number) => ReactNode
}

/**
 * The For component is used to iterate over an array and render a list of
 * components or display a fallback when the array is empty.
 * Inspired by the `<For>` component from SolidJS.
 *
 * @example
 * ```tsx
 * <For each={['a', 'b', 'c']}>
 *   {(item, index) => <div key={index}>{item}</div>}
 * </For>
 * ```
 */
export function For<
  T extends string | number | Record<string, unknown> | undefined,
>(props: ForProps<T>) {
  const mappableChildren = props.children as unknown as (
    item: T,
    index: number,
  ) => ReactNode

  if (props.each?.length === 0) {
    return props.fallback || null
  }

  return props.each?.map(mappableChildren) as ReactNode
}
