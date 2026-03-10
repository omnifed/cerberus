# Cerberus React Signals

**True fine-grained reactivity for React. The Developer Experience of SolidJS, built on standard React primitives.**

`@cerberus/signals` is a high-performance, zero-dependency state management and data-fetching engine. It completely eliminates dependency arrays, avoids the "Context re-render cascade," and brings $O(1)$ component targeting to your React applications safely via `useSyncExternalStore`.

## ✨ Why this library?

- **Zero Dependency Arrays:** No more `useMemo`, `useCallback`, or `useEffect` tracking bugs. The reactive graph handles topological sorting automatically.
- **$O(1)$ Component Targeting:** State updates bypass the parent-to-child Virtual DOM cascade. Only the exact components that read the signal re-render.
- **First-Class Async & Caching:** Built-in `createQuery` and `createMutation` with automatic deduplication, React `<Suspense>` support, and declarative cache invalidation.
- **SSR Safe:** Factory-pattern domain stores guarantee memory safety in Next.js and Remix.
- **No Monkey-Patching:** 100% compliant with React Concurrent Mode. We don't hijack `JSX.createElement`.

---

## 📦 Installation

```bash
pnpm install @cerberus-design/signals

```

_(Note: React 18+ is required as a peer dependency)._

---

## 🧠 Core Concepts: The Reactive Triad

Our pure JavaScript core (`@cerberus/signals/core`) is built on three primitives. They can be used anywhere—inside React, Vanilla JS, or Node.js workers.

### 1. `createSignal` (State)

The foundation. It returns a familiar `[getter, setter]` tuple.

```typescript
import { createSignal } from '@cerberus/signals'

const [getCount, setCount] = createSignal(0)
setCount(getCount() + 1)
```

> **⚠️ Important Rule:** Always use **immutable updates** for objects and arrays. `setUsers([...getUsers(), newUser])`. The graph uses strict equality (`!==`) to detect changes.

### 2. `createComputed` (Derived State)

Lazily evaluates and caches derived data. It only re-runs if its underlying signals change _and_ it is actively being read.

```typescript
import { createComputed } from '@cerberus/signals'

const getDouble = createComputed(() => getCount() * 2)
```

### 3. `createEffect` (Side Effects)

Automatically tracks any signals read inside it and re-runs synchronously when they change.

```typescript
import { createEffect } from '@cerberus/signals'

createEffect(() => {
  console.log(`The count is now: ${getCount()}`)
})
```

---

## ⚛️ React Integration

Import from `@cerberus/signals/react` to safely bridge the reactive graph into your component tree.

### Local State (`useSignal` & `useRead`)

Replace `useState` with `useSignal` to avoid stale closures, and use `useRead` to subscribe to external signals.

```tsx
import { useSignal, useRead } from '@cerberus/signals/react'
import { getGlobalTheme } from '../store'

export function Counter() {
  const [count, setCount, getCount] = useSignal(0) // Local state
  const theme = useRead(getGlobalTheme) // Global state

  return <button onClick={() => setCount((c) => c + 1)}>Clicks: {count}</button>
}
```

### Micro-Optimizations (`<ReactiveText>`)

For high-frequency updates (e.g., typing, canvas coordinates), bypass the component's VDOM diff entirely:

```tsx
import { ReactiveText } from '@cerberus/signals/react'

// The parent component will NEVER re-render when getMouseX updates!
;<p>
  X-Coord: <ReactiveText data={getMouseX} />
</p>
```

---

## 🌍 Global State & SSR

Define your domain logic in pure TypeScript files, then use our factory pattern to inject them safely for Next.js/Remix Server-Side Rendering.

**1. Create the Store Blueprint:**

```typescript
// store.ts
import { createSignal, createComputed } from '@cerberus/signals'
import { createStoreContext } from '@cerberus/signals/react'

export function createAuthStore() {
  const [getUser, setUser] = createSignal<{ name: string } | null>(null)
  const isAuthenticated = createComputed(() => getUser() !== null)

  return { user: getUser, isAuthenticated, setUser }
}

export const { StoreProvider, useStore } =
  createStoreContext<ReturnType<typeof createAuthStore>>()
```

**2. Inject and Consume in React:**

```tsx
// App.tsx
;<StoreProvider createStore={createAuthStore}>
  <Navbar />
</StoreProvider>

// Navbar.tsx
const auth = useStore() // 100% typed!
const isAuth = useRead(auth.isAuthenticated)
```

---

## 📡 Async State & Caching

Stop writing `useEffect` for data fetching. Our library natively supports reactive querying, automatic deduplication, and declarative mutations.

### `createQuery`

Provide a reactive argument function and a fetcher. It automatically integrates with React `<Suspense>`.

```tsx
import { createSignal } from '@cerberus/signals'
import { createQuery } from '@cerberus/signals/core'
import { useQuery } from '@cerberus/signals/react'

const [getUserId] = createSignal(1)

// Automatically re-fetches when getUserId() changes!
export const userQuery = createQuery(getUserId, async (id) => {
  return await fetch(`/api/users/${id}`).then((res) => res.json())
})

export function Profile() {
  const user = useQuery(userQuery) // Suspends while pending!
  return <h1>{user.name}</h1>
}
```

### `createMutation`

Mutate data and declaratively invalidate cache keys using the dynamic `.key` property on your queries.

```typescript
import { createMutation } from '@cerberus/signals/core'

export const updateUser = createMutation(
  async (name: string) =>
    fetch(`/api/users/${getUserId()}`, { method: 'POST', body: name }),
  {
    // Evaluates exactly when the mutation succeeds, clearing the exact cache entry!
    invalidate: () => [userQuery.key],
  },
)
```

---

_Copyright (c) 2024 Digital University, All Rights Reserved_
