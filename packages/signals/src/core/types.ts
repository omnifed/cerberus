export interface Owner {
  owned: Owner[] | null
  cleanups: (() => void)[] | null
}

export interface Observer extends Owner {
  dependencies: Set<Observable>
  execute(): void
  cleanup(): void
  depth: number
}

export interface Observable {
  observers: Set<Observer>
  depth: number
}

// Signals

export type Accessor<T> = () => T
export type Setter<T> = (newValue: T | ((prev: T) => T)) => void
export type SignalTuple<T> = [Accessor<T>, Setter<T>]
