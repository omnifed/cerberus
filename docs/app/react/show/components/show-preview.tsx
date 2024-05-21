'use client'

import { Logout } from '@cerberus-design/icons'
import { Button, Show } from '@cerberus-design/react'
import { useState } from 'react'

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
        <Button onClick={handleAuthenticate} type="button">
          Sign in
        </Button>
      }
    >
      <Button onClick={handleUnauthenticate} type="button">
        Sign out
        <Logout />
      </Button>
    </Show>
  )
}
