export type Assign<T, U> = Omit<T, keyof U> & U
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export interface PolymorphicProps {
  /**
   * Use the provided child element as the default rendered element.
   * @default false
   */
  asChild?: boolean
}
