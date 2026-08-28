'use client'

import { useSignal } from '@cerberus-design/signals'
import { useEffect } from 'react'

export function useCurrentHash(): string {
  const [hash, setHash] = useSignal<string>('')

  useEffect(() => {
    setHash(window.location.hash)

    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return hash
}
