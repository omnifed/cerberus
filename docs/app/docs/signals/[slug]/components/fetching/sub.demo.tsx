import { createQuery, createEffect } from '@cerberus-design/signals'

const getUUID = createQuery<string, void>(fetchUUID, 'queryUUID')

export function main() {
  const accessor = getUUID()

  // This effect runs immediately, and then re-runs automatically
  // the exact millisecond the fetch completes
  createEffect(() => {
    const state = accessor() // Tracks the dependency

    if (state.status === 'pending') {
      console.log('Loading UUID...')
    } else if (state.status === 'success') {
      console.log('Syncing UUID to external system:', state.data)
      // document.getElementById('my-span').innerText = state.data
    }
  })
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
