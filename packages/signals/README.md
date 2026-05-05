# ⚡️ Cerberus Signals

An enterprise-grade, $O(1)$ signal-based state and data-fetching engine.

Designed from the ground up to bypass the heavy abstraction costs of traditional state managers, Cerberus delivers industry-leading performance by utilizing flat Map lookups, direct signal memory pointers, and an automated Garbage Collection system. It is fully memory-safe for React 19 Strict Mode while remaining 100% framework-agnostic at its core.

This README is a high-level summary of the API. To view the full API [view the official Docs](https://cerberus.digitalu.design/docs/signals/overview).

## Why Cerberus Signals?

### vs. React State (`useState` + `useEffect`)

Fetching data natively in React requires boilerplate. You have to manually track `isLoading`, `data`, and `error` states. More importantly, React state is bound to the component lifecycle. If two components need the same data, you either fetch it twice (causing network waterfalls) or you lift the state up and drill it down (causing unnecessary re-renders). Cerberus lifts your data out of the component lifecycle entirely. It fetches once, caches globally, and granularly updates only the components that need it using fine-grained signals.

### vs. Tanstack Query

Tanstack Query is the industry standard, but it carries a heavy architectural cost. Under the hood, it relies on deeply nested class instances (`QueryClient`, `QueryCache`, `Query`, `QueryObserver`), React Context for client injection, and fuzzy-matching event emitters for invalidations.

Cerberus takes a completely different path: **The Global Factory Pattern**.

- **Zero Context:** No `<QueryClientProvider>` required.
- **Zero Allocations:** We use flat, $O(1)$ V8-optimized `Map` lookups. Rendering 10,000 components querying the same data incurs zero `useEffect` or `useRef` allocations.
- **Instant Invalidations:** We bypass fuzzy-matching loops. Invalidations are resolved via direct memory pointers in a fraction of a microsecond.
- **Native AI Streaming:** We natively support `AsyncGenerators` (`yield`), pushing chunks directly to the UI while cleanly bypassing React Suspense mid-stream.

---

## Table of Contents

1. [Installation](#1-installation)
2. [Primitives (Framework Agnostic)](#2-primitives-framework-agnostic)
3. [React Hooks](#3-react-hooks)
4. [Components & Architecture](#4-components--architecture)
5. [Benchmarks](#5-benchmarks)

---

## 1. Installation

```bash
pnpm install @cerberus-design/signals
```

---

## 2. Primitives (Framework Agnostic)

The core power of Cerberus is that the data engine has zero dependencies on React. Our primitives export standard JavaScript functions that can be used in **any scope**: web workers, Node.js servers, Next.js/Remix router loaders, or vanilla JS utilities.

### `createSignal`

Use globally in any scope (stores, scripts, server, client, whatever).

```typescript
import { createSignal } from '@cerberus-design/signals'

// A global signal
export const [one, setOne] = createSignal<number>(1)

// Or with stores
export function createUserStore() {
  const [firstName, setFirstName] = createSignal('')
  const [lastName, setLastName] = createSignal('')
  const [somethingElse, setSomethingElse] = createSignal('')

  const fullName = createComputed(() => `${firstName()} ${lastName()}`)

  return {
    firstName,
    lastName,
    fullName,

    setUser: (user: User) => {
      batch(() => {
        setFirstName(user.first)
        setLastName(user.last)
      })
    },
  }
}
```

### `createComputed`

Create computations of other signals with ease.

```typescript
import { createSignal, createComputed } from '@cerberus-design/signals'

const [firstName, setFirstName] = createSignal('')
const [lastName, setLastName] = createSignal('')

export const fullName = createComputed(() => `${firstName()} ${lastName()}`)
```

### `createEffect`

Do things when signals change.

```typescript
import { createEffect } from '@cerberus-design/signals'

const [firstName, setFirstName] = createSignal('')
const [lastName, setLastName] = createSignal('')

export const fullName = createComputed(() => `${firstName()} ${lastName()}`)

createEffect(() => {
  if (fullName) {
    trackUser(fullName)
  }
})
```

### `createQuery` (The Global Factory)

You define your queries globally. This returns a "Query Accessor" factory.

```typescript
import { createQuery } from '@cerberus-design/signals'

// Define the factory outside of any component
export const getUser = createQuery(
  async (id: string) => {
    const res = await fetch(`/api/users/${id}`)
    return res.json()
  },
  'user-query', // The base cache key
)
```

**Using it outside of React:**
When you invoke the factory, it returns an accessor. Calling the accessor gives you the raw `QueryState`.

```typescript
// Inside a Vanilla JS function, Web Worker, or Router Loader
async function preloadUser(userId: string) {
  // 1. Invoke the factory to get the accessor
  const userAccessor = getUser(userId)

  // 2. Read the raw signal state
  const state = userAccessor()

  if (state.status === 'success') {
    return state.data
  }

  if (state.status === 'pending' && state.promise) {
    // Await the fetch imperatively
    return await state.promise
  }
}
```

### `createMutation`

Mutations define how you change data on the server. They integrate deeply with our cache primitives to provide flawless Optimistic UI updates.

```typescript
import { createMutation, setQueryData, invalidateQuery } from '@cerberus-design/signals'
import { getUser } from './queries'

export const updateUser = createMutation(
  (payload: { id: string; name: string }) => api.updateUser(payload),
  {
    // 1. Optimistic Update: Fires instantly before the network request finishes
    onMutate: (vars) => {
      // Use the factory's .key() method for deterministic cache targeting
      setQueryData(getUser.key(vars.id), (prev) => {
        if (!prev) return prev
        return { ...prev, name: vars.name }
      })
    },
    // 2. Invalidation: Fires after the network request finishes
    invalidate: (data, vars) => [getUser.key(vars.id)],
  },
)
```

### Cache Management Primitives

- `setQueryData(key, updater)`: Mutate the cache synchronously. Executes in ~128ns.
- `invalidateQuery(key)`: Marks the data as stale and triggers a background refetch (Stale-While-Revalidate).
- `invalidateAllQueries()`: Sweeps the entire engine.

---

## 3. React Hooks

When you bring Cerberus into React, our hooks wire the framework-agnostic signals directly into React 19's `useSyncExternalStore` and Suspense lifecycles.

### `useQuery`

Consumes a query accessor. It automatically handles React Suspense, Error Boundaries, and background Garbage Collection.

```tsx
import { useQuery } from '@cerberus-design/signals'
import { getUser } from '../queries'

export function UserProfile({ id }: { id: string }) {
  // 1. If data is missing, this throws a Promise to <Suspense>
  // 2. If data is present (even if stale), it bypasses Suspense (SWR)
  const user = useQuery(getUser(id))

  return <h1>{user.name}</h1>
}
```

### `useMutation`

Wires your mutation factory to the UI, providing execution triggers and loading states.

```tsx
import { useMutation } from '@cerberus-design/signals'
import { updateUser } from '../mutations'

export function UpdateForm({ id }: { id: string }) {
  const { mutate, status } = useMutation(updateUser)

  return (
    <button onClick={() => mutate({ id, name: 'New Name' })}>
      {status === 'pending' ? 'Saving...' : 'Save'}
    </button>
  )
}
```

---

## 4. Components & Architecture

### React Suspense Integration

Cerberus is built natively for React Suspense. You do not need `if (isLoading)` checks in your components. Simply wrap your UI in a `<Suspense>` boundary.

```tsx
import { Suspense } from 'react'

export function App() {
  return (
    <Suspense fallback={<div className="spinner" />}>
      <UserProfile id="user-1" />
    </Suspense>
  )
}
```

### AI Streaming (Async Generators)

Cerberus natively supports the `yield` keyword for LLM streaming. Our engine uses a "First-Chunk Promise" architecture: it suspends React while waiting for the network, but wakes React up the exact millisecond the first chunk of data yields, streaming the rest of the response to the UI without blocking the main thread.

```tsx
export const getChatStream = createQuery(async function* (prompt: string) {
  const response = await fetch('/api/chat', { method: 'POST', body: prompt })
  const reader = response.body?.getReader()
  const decoder = new TextDecoder()

  let fullText = ''
  while (true) {
    const { done, value } = await reader!.read()
    if (done) break

    fullText += decoder.decode(value)
    yield fullText // Automatically updates the UI!
  }
}, 'chat-stream')
```

---

## 5. Benchmarks

Cerberus is designed to be the fastest data layer in the JavaScript ecosystem. Benchmarks were run directly against `@tanstack/query-core` (v5) on an Apple M3 Pro using `mitata`.

| Operation                            | Tanstack Query Core | Cerberus Signals | Performance Gain              |
| :----------------------------------- | :------------------ | :--------------- | :---------------------------- |
| **Cache Retrieval (10k concurrent)** | 3.08 ms             | **1.54 ms**      | **2x Faster** (50% less time) |
| **Retrieval Memory Overhead**        | ~58.37 kb           | **~6.32 kb**     | **~89% Less Memory**          |
| **Cache Invalidation Sweep**         | 485.13 ns           | **108.83 ns**    | **~4.4x Faster**              |
| **Optimistic UI (setQueryData)**     | -                   | **128.15 ns**    | _Instantaneous_               |

_Note: Cerberus achieves these metrics by eliminating class instantiations, fuzzy-matching loops, and React hook dependencies during active renders, heavily reducing Garbage Collection pauses during complex application states._
