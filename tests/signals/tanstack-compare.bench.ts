import { createQuery } from '@cerberus-design/signals'
import { invalidateQuery } from '@cerberus-design/signals/src/core/query-cache'
import { QueryClient } from '@tanstack/query-core'
import { bench, group, run } from 'mitata'

// --- Setup Data ---
const dummyFetcher = async (id: string) => ({ id, name: 'Test User' })

// --- Tanstack Setup ---
const tanstackClient = new QueryClient()

// --- Cerberus Setup ---
const getCerberusUser = createQuery(dummyFetcher, 'shared-user')

group('Head-to-Head: Cache Retrieval (10,000 reads)', () => {
  // Prime both caches
  tanstackClient.setQueryData(['tanstack-user', '1'], { id: '1', name: 'Test User' })
  getCerberusUser('1')()

  bench('Tanstack Query Core', () => {
    // Tanstack's method of reading a cached value synchronously
    for (let i = 0; i < 10000; i++) {
      tanstackClient.getQueryData(['tanstack-user', '1'])
    }
  })

  bench('Cerberus Signals', () => {
    // Cerberus's method of reading a cached value synchronously
    for (let i = 0; i < 10000; i++) {
      getCerberusUser('1')()
    }
  })
})

group('Head-to-Head: Invalidation Sweep', () => {
  bench('Tanstack Query Core', async () => {
    // Tanstack's invalidation trigger
    await tanstackClient.invalidateQueries({ queryKey: ['tanstack-user'] })
  })

  bench('Cerberus Signals', () => {
    // Cerberus's declarative invalidation
    invalidateQuery(getCerberusUser.key('1'))
  })
})

await run({
  colors: true,
  format: 'mitata',
})
