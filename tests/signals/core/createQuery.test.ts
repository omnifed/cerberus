import { createQuery, setQueryData } from '@cerberus-design/signals'
import { globalQueryCache } from '@cerberus-design/signals/src/core/query-cache'
import { beforeEach, describe, expect, jest, test } from 'bun:test'

describe('createQuery', () => {
  // Clear the global cache before every test to ensure true isolation
  beforeEach(() => {
    globalQueryCache.clear()
  })

  describe('Base Accessor & Keys', () => {
    type User = {
      id: number
      authenticated: boolean
    }

    const api = jest.fn(async (id: User['id']): Promise<User> => {
      return { id, authenticated: true }
    })

    const query = createQuery(api, 'test-query')

    test('it returns a query tuple', () => {
      expect(query).toEqual(expect.any(Function))
      expect(query).toHaveProperty('key')
      // Note: Depending on your hashArgs implementation, it might format as '["test-query",1]'
      // Adjust this assertion to match the exact string output of your `hashArgs`
      expect(query.key(1)).toBe('[test-query,1]')
    })
  })

  describe('React Server Components (RSC) & Hydration', () => {
    test('should expose the raw fetcher for Server Components', async () => {
      const fetcher = async (id: string) => `Fetched User ${id}`
      const getUser = createQuery(fetcher, 'rsc-query')

      // Execute the fetcher directly (simulating an RSC environment)
      // Pass a dummy update function since the context expects it
      const data = await getUser.fetcher('123')

      expect(data).toBe('Fetched User 123')
      // Ensure the global cache was NOT touched during the raw fetch
      expect(globalQueryCache.size).toBe(0)
    })

    test('should hydrate instantly with initialData and bypass the fetcher', () => {
      const fetcher = jest.fn().mockResolvedValue('Unexpected Fetch!')
      const getUser = createQuery(fetcher, 'hydrate-query')

      // Invoke the accessor with initialData (simulating Client Component mount)
      const state = getUser('123')({ initialData: 'Hydrated User' })

      // Validate the cache was seeded perfectly
      expect(state.status).toBe('success')
      expect(state.data).toBe('Hydrated User')
      expect(state.version).toBe(1) // Should start at 1 to guard against instant mutations

      // Crucial: Ensure the network fetcher was NEVER called!
      expect(fetcher).not.toHaveBeenCalled()
    })

    test('should ignore initialData if the cache node already exists (SWR respect)', () => {
      const fetcher = jest.fn()
      const getUser = createQuery(fetcher, 'hydrate-existing')

      // Seed the cache manually first
      setQueryData(getUser.key('123'), () => 'Live Data')

      // Attempt to hydrate with old server data
      const state = getUser('123')({ initialData: 'Stale Server Data' })

      // Ensure the live data won the battle
      expect(state.data).toBe('Live Data')
    })
  })

  describe('Concurrency & Race Conditions', () => {
    test('should abort stale promises if an optimistic update occurs mid-fetch', async () => {
      // Create a fetcher we can manually resolve to simulate network delay
      let resolveNetworkReq!: (value: string) => void
      const fetcher = () =>
        new Promise<string>((res) => {
          resolveNetworkReq = res
        })

      const getPost = createQuery(fetcher, 'race-query')
      const accessor = getPost('post-1')

      // Trigger the initial fetch (Version 0)
      accessor()
      expect(accessor().status).toBe('pending')

      // User clicks a button! Optimistically update the cache (Bumps Version to 1)
      setQueryData(getPost.key('post-1'), () => 'Optimistic Update')
      expect(accessor().data).toBe('Optimistic Update')
      expect(accessor().version).toBe(1)

      // The delayed network request finally finishes and tries to return "Stale Data"
      resolveNetworkReq('Stale Server Data')

      // Wait a micro-tick for the promise to resolve in the engine
      await new Promise(process.nextTick)

      // THE ULTIMATE TEST: The engine should have thrown the stale data in the trash
      const finalState = accessor()
      expect(finalState.data).toBe('Optimistic Update') // Did not get overwritten!
      expect(finalState.status).toBe('success')
    })
  })

  describe('Deduplication & Cache Stability', () => {
    test('should deduplicate simultaneous fetches', () => {
      const fetcher = jest.fn().mockReturnValue(new Promise(() => {}))
      const getSettings = createQuery(fetcher, 'dedupe-query')

      // Render 3 components at the exact same time
      getSettings('theme')()
      getSettings('theme')()
      getSettings('theme')()

      // The fetcher should only be invoked exactly ONCE
      expect(fetcher).toHaveBeenCalledTimes(1)
      expect(globalQueryCache.size).toBe(1)
    })
  })
})
