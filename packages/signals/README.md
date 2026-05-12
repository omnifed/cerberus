# ⚡️ Cerberus Signals

[![NPM Version](https://img.shields.io/npm/v/@cerberus-design/signals)](https://www.npmjs.com/package/@cerberus-design/signals)
[![React 19 Ready](https://img.shields.io/badge/React-19_Ready-blue)](#)
[![Performance](<https://img.shields.io/badge/Performance-O(1)-success>)](#)

An enterprise-grade, **O(1)** signal-based state management and data-fetching engine for React and Vanilla JavaScript.

Designed from the ground up to bypass the heavy abstraction costs of traditional state managers (like Redux or Zustand), Cerberus delivers industry-leading performance by utilizing flat Map lookups, direct signal memory pointers, and an automated Garbage Collection system. It is fully memory-safe for React 19 Strict Mode, natively supports React Suspense, and remains 100% framework-agnostic at its core.

📖 [View the Official Documentation](https://cerberus.digitalu.design/docs/signals/overview)

---

## 🚀 Key Features & Architecture

Cerberus takes a completely different path from standard data-fetching libraries like Tanstack Query. Instead of relying on deeply nested class instances and React Context, Cerberus uses **The Global Factory Pattern** powered by fine-grained reactive signals (similar to SolidJS).

- **O(1) Topological Sorting:** Guaranteed glitch-free state execution. Solves the Diamond Dependency problem in ~74 microseconds.
- **Zero Context Providers:** No `<QueryClientProvider>` required. Define state anywhere, use it everywhere.
- **Zero Allocations:** We use flat, V8-optimized `Map` lookups. Rendering 10,000 components querying the same data incurs zero `useEffect` or `useRef` heap allocations.
- **Instant Invalidations:** Bypasses fuzzy-matching loops. Cache invalidations are resolved via direct memory pointers in ~100 nanoseconds.
- **Native AI Streaming:** Natively supports `AsyncGenerators` (`yield`), pushing chunks directly to the UI while cleanly bypassing React Suspense mid-stream.

---

## 📊 Benchmarks (v1.4.0)

Cerberus is engineered to be the fastest state and data layer in the JavaScript ecosystem. Benchmarks were run natively in Bun against `@tanstack/query-core` on an Apple Silicon processor.

### Graph Engine Performance

By utilizing intrusive doubly-linked lists and bitmask flags, Cerberus achieves bare-metal execution speeds, completely eliminating Garbage Collector pauses during complex application states.

| Scenario                                     | Execution Time | Memory Overhead |
| :------------------------------------------- | :------------- | :-------------- |
| **Deep Dependency Chain** (1,000 nested)     | ~116.98 µs     | Fractional      |
| **Wide Fan-Out** (1 Signal → 10,000 Effects) | ~728.52 µs     | Fractional      |
| **Diamond Problem** (1,000 Computeds)        | ~74.04 µs      | Fractional      |

### Data Fetching: Cerberus vs. Tanstack Query

| Operation                            | Tanstack Query Core | Cerberus Signals | The Cerberus Advantage |
| :----------------------------------- | :------------------ | :--------------- | :--------------------- |
| **Cache Retrieval (10k concurrent)** | 3.05 ms             | **1.54 ms**      | **~2x Faster**         |
| **Retrieval Memory**                 | ~60.28 kb           | **~7.53 kb**     | **~87% Less Memory**   |
| **Cache Invalidation Sweep**         | 618.33 ns           | **100.23 ns**    | **~6.1x Faster**       |
| **Optimistic UI (`setQueryData`)**   | N/A                 | **103.73 ns**    | **Instantaneous**      |

---

## 📦 Installation

```bash
npm install @cerberus-design/signals
# or
pnpm add @cerberus-design/signals
# or
yarn add @cerberus-design/signals
```

---

## 🛠️ Primitives (Framework Agnostic)

The core data engine has zero dependencies on React. These primitives export standard JavaScript functions that can be used in **any scope**: Web Workers, Node.js servers, Next.js/Remix loaders, or Vanilla JS utilities.

### `createSignal` & `createComputed`

Use globally in any scope to create highly performant, reactive stores.

```typescript
import { createSignal, createComputed, batch } from '@cerberus-design/signals'

export function createUserStore() {
  const [firstName, setFirstName] = createSignal('')
  const [lastName, setLastName] = createSignal('')

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

### `createQuery` (The Global Factory)

Define your queries globally outside the React tree. Returns a framework-agnostic "Query Accessor" factory.

```typescript
import { createQuery } from '@cerberus-design/signals'

export const getUser = createQuery(
  async (id: string) => {
    const res = await fetch(`/api/users/${id}`)
    return res.json()
  },
  'user-query', // O(1) Cache Key
)
```

### `createMutation`

Define how you mutate data on the server, tightly integrated with the cache for flawless Optimistic UI updates.

```typescript
import { createMutation, setQueryData } from '@cerberus-design/signals'
import { getUser } from './queries'

export const updateUser = createMutation(
  (payload: { id: string; name: string }) => api.updateUser(payload),
  {
    // Optimistic Update: Fires instantly before the network request finishes
    onMutate: (vars) => {
      setQueryData(getUser.key(vars.id), (prev) => {
        if (!prev) return prev
        return { ...prev, name: vars.name }
      })
    },
    // Invalidation: Marks cache as stale to trigger background refetch
    invalidate: (data, vars) => [getUser.key(vars.id)],
  },
)
```

---

## ⚛️ React Hooks Integration

When you bring Cerberus into React, our hooks wire the framework-agnostic signals directly into React 19's `useSyncExternalStore` and Suspense lifecycles.

### `useQuery` (with Native Suspense)

Consumes a query factory. It automatically handles React Suspense, Error Boundaries, and background Garbage Collection.

```tsx
import { Suspense } from 'react'
import { useQuery } from '@cerberus-design/signals'
import { getUser } from '../queries'

function UserProfile({ id }: { id: string }) {
  // Bypasses Suspense if data is cached (Stale-While-Revalidate)
  const user = useQuery(getUser(id))
  return <h1>{user.name}</h1>
}

export function App() {
  return (
    // No `if (isLoading)` needed!
    <Suspense fallback={<div className="spinner" />}>
      <UserProfile id="user-1" />
    </Suspense>
  )
}
```

### AI LLM Streaming (Async Generators)

Cerberus natively supports the `yield` keyword. It suspends React while waiting for the network, but wakes React up the exact millisecond the first chunk of data yields, streaming the rest of the response without blocking the main thread.

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
    yield fullText // Automatically triggers a granular UI update!
  }
}, 'chat-stream')
```

---

@copyright 2025 Omnifederal LLC, Inc. All rights reserved.
