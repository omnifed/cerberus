import type { ReactNode, JSX } from 'react'

export interface ForProps<T extends readonly unknown[], U extends JSX.Element> {
  /**
   * The array to iterate over.
   */
  each: T | undefined | null | false
  /**
   * The fallback to render when the array is empty.
   */
  fallback?: JSX.Element
  /**
   * The children to render for each item in the array.
   */
  children: (item: T[number], index: number) => U
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
export function For<T extends readonly unknown[], U extends JSX.Element>(
  props: ForProps<T, U>,
) {
  if (!props.each || !props.each.length) {
    return props.fallback || null
  }

  return <>{props.each?.map(props.children) as ReactNode}</>
}
