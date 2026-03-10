import { createContext, useContext, useRef, type ReactNode } from 'react'

/**
 * ## Signals Store Factory
 *
 * A factory function that creates a React context and provider for a
 * signals-based store.
 *
 * ### Returns
 *
 * | Prop | Description |
 * |------|-------------|
 * | `StoreProvider` | React context provider that caches the store. |
 * | `useStore` | Hook that provides access to the store within the provider value. |
 *
 * ### Store Provider
 *
 * A React context that caches the provided store in a non-render triggering way.
 * This allows the store to be accessed and updated **without causing a re-render
 * to the VDOM tree**.
 *
 * This is useful when you need a unique instance of a global store across user sessions.
 *
 * | Prop | Type | Description |
 * |------|------|-------------|
 * | `store` | `TStore` | Signals-based store object. |
 *
 * ### Store Hook
 *
 * The hook that provides access to the store within the provider value.
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
export function createStoreContext<TStore>() {
  // 1. Create the Context scoped to this specific factory call
  const StoreContext = createContext<TStore | null>(null)

  // 2. The Provider handles the lazy SSR initialization securely
  function StoreProvider({
    createStore,
    children,
  }: {
    createStore: () => TStore
    children: ReactNode
  }) {
    const storeRef = useRef<TStore | null>(null)

    if (!storeRef.current) {
      storeRef.current = createStore()
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    )
  }

  // 3. The Hook automatically infers TStore (No casting required by the user!)
  function useStore(): TStore {
    const store = useContext(StoreContext)
    if (store === null) {
      throw new Error(
        'useStore must be used within its corresponding StoreProvider.',
      )
    }
    return store
  }

  return { StoreProvider, useStore }
}
