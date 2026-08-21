'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { Button } from '@cerberus-design/react'
import { createQuery, useQuery, useSignal } from '@cerberus-design/signals'
import { Suspense } from 'react'

// Define Query Factory
const queryUser = createQuery(fetchUser, 'queryUser')

interface UserInfoProps {
  user: User['id']
}

function UserInfo(props: UserInfoProps) {
  const data = useQuery(queryUser(props.user))
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export function BasicDemo() {
  // pretend this is from route params instead of a signal. useSignal will force
  // the render update like a URL param change would.
  const [user, setUser] = useSignal<User['id']>('16aad9b1-67e2-443b-bb09-df6cf0ee4f49')

  return (
    <Stack direction="column" justify="space-between" w="3/4">
      <Suspense fallback={<Box aria-busy h="96px" rounded="sm" w="full" />}>
        <UserInfo user={user} />
      </Suspense>

      <Button onClick={() => setUser(crypto.randomUUID())}>Change User</Button>
    </Stack>
  )
}

// API

type User = {
  id: string
  name: string
}

function fetchUser(id: User['id']): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` })
    }, 500)
  })
}
