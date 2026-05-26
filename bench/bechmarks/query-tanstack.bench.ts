import { bench, group, run } from 'mitata'
import { QueryClient, hashKey } from '@tanstack/query-core'
import { setQueryData, createQuery } from '@cerberus-design/signals'
import { hashArgs } from '@cerberus-design/signals/src/core/createQuery'
import { invalidateQuery } from '@cerberus-design/signals/src/core/query-cache'

// -------------------------------------------------------------------------
// Setup Data & Instances
// -------------------------------------------------------------------------
const ITERATIONS = 10000
const complexArgs = { filter: 'active', sort: 'desc', page: 2, tags: ['a', 'b', 'c'] }
const baseKey = 'users'

// TanStack Setup
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
})
queryClient.setQueryData([baseKey, complexArgs], { id: 1, name: 'Test' })

// Cerberus Setup
// Pre-populate the cache so we are testing retrieval/deduplication, not the fetcher
const cerbQuery = createQuery(async () => ({ id: 1, name: 'Test' }), baseKey)
const cerbHash = hashArgs([baseKey, complexArgs])
setQueryData(cerbHash, () => ({ id: 1, name: 'Test' }))

// ============================================================================
// TEST 1: Complex Object Hashing
// ============================================================================
group('Data Layer: Hashing & Serialization', () => {
  bench('Cerberus (hashArgs)', () => {
    hashArgs([baseKey, complexArgs])
  })

  bench('TanStack (hashKey)', () => {
    hashKey([baseKey, complexArgs])
  })
})

// ============================================================================
// TEST 2: Cache Retrieval (10,000 Reads)
// ============================================================================
group(`Data Layer: Cache Retrieval (${ITERATIONS} concurrent reads)`, () => {
  bench('Cerberus (queryAccessor)', () => {
    const query = cerbQuery(complexArgs)
    for (let i = 0; i < ITERATIONS; i++) {
      query()
    }
  })

  bench('TanStack (getQueryData)', () => {
    for (let i = 0; i < ITERATIONS; i++) {
      queryClient.getQueryData([baseKey, complexArgs])
    }
  })
})

// ============================================================================
// TEST 3: Optimistic UI Updates (setQueryData)
// ============================================================================
group('Data Layer: Optimistic Updates (setQueryData)', () => {
  let counter = 0

  bench('Cerberus', () => {
    counter++
    setQueryData(cerbHash, () => ({ id: 1, name: `Test ${counter}` }))
  })

  bench('TanStack', () => {
    counter++
    queryClient.setQueryData([baseKey, complexArgs], { id: 1, name: `Test ${counter}` })
  })
})

// ============================================================================
// TEST 4: Cache Invalidation Sweep
// ============================================================================
group('Data Layer: Cache Invalidation Sweep', () => {
  bench('Cerberus (invalidateQuery)', () => {
    invalidateQuery(cerbHash)
  })

  bench('TanStack (invalidateQueries)', async () => {
    // Tanstack invalidateQueries returns a promise that resolves when refetches are done.
    // We pass `refetchType: 'none'` to isolate just the cache invalidation logic.
    await queryClient.invalidateQueries({
      queryKey: [baseKey, complexArgs],
      refetchType: 'none',
    })
  })
})

await run()
