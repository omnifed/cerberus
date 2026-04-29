import { createQuery, createEffect } from '@cerberus-design/signals'

const queryUUID = createQuery(fetchUUID, 'queryUUID')

export function main() {
  // 1. Get the reactive accessor for this specific query
  const getUUIDState = queryUUID({})

  // 2. This effect runs immediately, automatically tracking the accessor.
  // If the cache is empty, reading getUUIDState() triggers the background fetch!
  createEffect(() => {
    // Read the live signal state directly
    const state = getUUIDState()

    if (state.status === 'pending') {
      console.log('Loading UUID...')
    } else if (state.status === 'success') {
      console.log('Syncing UUID to external system:', state.data)
      // document.getElementById('my-span').innerText = state.data
    } else if (state.status === 'error') {
      console.error('Failed to load UUID:', state.error)
    }
  })
}

// API

type UUID = string
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchUUID(): Promise<UUID> {
  await delay(500)
  return crypto.randomUUID()
}
