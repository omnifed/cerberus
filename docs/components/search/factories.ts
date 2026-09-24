'use client'

import { createQuery } from '@cerberus-design/signals'

let pagefindInstance: any = null

export const querySearch = createQuery(
  async (args: { searchTerm: string; activeFilter: string }) => {
    const { searchTerm, activeFilter } = args
    if (!searchTerm) return []

    if (!pagefindInstance && typeof window !== 'undefined') {
      try {
        const bypassBundler = new Function('url', 'return import(url)')
        pagefindInstance = await bypassBundler('/pagefind/pagefind.js')
        await pagefindInstance.options({})
      } catch {
        console.warn('Pagefind index not found. Run a build to generate search data.')
        return []
      }
    }

    const formattedFilter = !activeFilter ? 'all' : activeFilter
    const options =
      formattedFilter === 'all' ? {} : { filters: { section: formattedFilter } }

    const search = await pagefindInstance.debouncedSearch(searchTerm)
    const topResults = await Promise.all(
      search.results.slice(0, 5).map((r: any) => r.data()),
    )

    console.log({ topResults, searchTerm, options })

    return topResults
  },
  'querySearch',
)
