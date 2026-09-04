import { createQuery } from '@cerberus-design/signals'

const getUUID = createQuery(fetchUUID, 'queryUUID')

export async function main() {
  const state = getUUID(undefined)()

  if (state.status === 'pending' && state.promise) {
    try {
      // Await the underlying fetch directly
      const uuid = await state.promise
      console.log('Fetched successfully:', uuid)
    } catch (error) {
      console.error('Fetch failed:', error)
    }
  } else if (state.status === 'success') {
    // If it was already cached, just use it instantly
    console.log('Read from cache:', state.data)
  }
}

// API

type UUID = string

function fetchUUID(): Promise<UUID> {
  return new Promise<UUID>((resolve) => {
    setTimeout(() => {
      resolve(crypto.randomUUID())
    }, 500)
  })
}
