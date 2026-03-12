export interface Observable {
  observers: Set<Observer>
}

export interface Observer {
  dependencies: Set<Observable>
  execute(): void
  cleanup(): void
}

export type Accessor<T> = () => T
export type Setter<T> = (newValue: T | ((prev: T) => T)) => void
export type SignalTuple<T> = [Accessor<T>, Setter<T>]
