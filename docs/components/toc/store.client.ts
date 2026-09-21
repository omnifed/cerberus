'use client'

import { createSignal } from '@cerberus-design/signals'

function tocStore() {
  const [activeHash, setActiveHash] = createSignal<string>('')

  return {
    activeHash,
    setActiveHash,
  }
}

export const store = tocStore()
