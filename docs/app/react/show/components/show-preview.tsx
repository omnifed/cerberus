'use client'

import { Show } from '@cerberus-design/react'
import { useState } from 'react'

// TODO: Replace with button component

export default function ShowPreview() {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  function handleAuthenticate() {
    setAuthenticated(true)
  }

  function handleUnauthenticate() {
    setAuthenticated(false)
  }

  return (
    <Show
      when={authenticated}
      fallback={
        <button onClick={handleAuthenticate} type="button">
          Sign in
        </button>
      }
    >
      <button onClick={handleUnauthenticate} type="button">
        Sign out
      </button>
    </Show>
  )
}
