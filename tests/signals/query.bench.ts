import { createQuery, hashArgs } from '@cerberus-design/signals/src/core/createQuery'
import { invalidateQuery } from '@cerberus-design/signals/src/core/query-cache'
import { bench, run, group } from 'mitata'

group('Query API Data Layer', () => {
  bench('hashArgs - Complex Object Sorting & Hashing', () => {
    // Tests the worst-case scenario: a user passing a large, unsorted
    // configuration object as a query key along with the baseKey.
    hashArgs([
      'test-base-key',
      {
        zulu: 1,
        alpha: 'test',
        nested: { charlie: true, bravo: false },
        array: [3, 2, 1, { delta: 4 }],
        timestamp: new Date().toISOString(),
      },
    ])
  })

  // Setup for Cache Hit test
  // 1. Create the global factory once
  const dummyFetcher = async () => ({ id: 1, name: 'Test' })
  const getAvatar = createQuery(dummyFetcher, 'shared-avatar')

  // 2. Prime the cache once
  getAvatar('user-1')()

  bench('Cache Retrieval & Deduplication (10,000 concurrent calls)', () => {
    // Simulates rendering a massive list (e.g., 10,000 rows in a data grid)
    // where every cell requests the same piece of data.
    // Proves that the O(1) Map lookup and pure Accessor return is virtually instant,
    // with ZERO side-effects or hook allocations.
    for (let i = 0; i < 10000; i++) {
      getAvatar('user-1')() // Generates accessor and immediately reads cache
    }
  })

  // Setup for Invalidation test
  const dynamicFetcher = async (id: number) => ({ id, ts: Date.now() })
  const getUser = createQuery(dynamicFetcher, 'user-query')

  // Prime the cache and get the accessor
  const userAccessor = getUser(999)
  userAccessor()

  bench('Cache Invalidation Sweep', () => {
    // Proves that triggering an invalidation correctly finds the key,
    // drops the cache, and forces the underlying version signal to bump
    // without locking up the thread.
    invalidateQuery(userAccessor.key) // We can read the key directly from the accessor
  })
})

await run({
  colors: true,
  format: 'mitata',
})
