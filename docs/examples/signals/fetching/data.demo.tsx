'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { Button, ButtonGroup, Text } from '@cerberus-design/react'
import {
  createMutation,
  setQueryData,
  useMutation,
  useQuery,
} from '@cerberus-design/signals'
import { Suspense } from 'react'
import { api, User } from './db'
import { queryUser } from './queries'

// Factories

const updateUser = createMutation(
  (payload: User) => api.updateUser(payload.id, payload.name),
  {
    onMutate: (vars) => {
      setQueryData<User>(queryUser.key(vars.id), (prev) => {
        if (!prev) return { id: vars.id, name: vars.name }
        return { ...prev, name: vars.name }
      })
    },
    invalidate: (_data, vars) => [queryUser.key(vars.id)],
  },
)

const addUser = createMutation((payload: User) => api.createUser(payload.name), {
  onMutate: (vars) => {
    setQueryData<User>(queryUser.key(vars.id), (prev) => {
      if (!prev) return { id: vars.id, name: vars.name }
      return { ...prev, name: vars.name }
    })
  },
  invalidate: (_data, vars) => [queryUser.key(vars.id)],
})

// UI

function UserInfo(props: { id: User['id'] }) {
  const data = useQuery(queryUser(props.id), {
    initialData: { id: props.id, name: 'Cerby the Dawg' },
  })
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export function DataDemo() {
  // pretend this is from props.params or something
  const userId = crypto.randomUUID()

  const { mutate, data } = useMutation(updateUser)
  const { mutate: addUserMutate, data: addUserData } = useMutation(addUser)

  return (
    <Stack direction="column" justify="space-between" w="3/4">
      <Suspense fallback={<Box aria-busy h="200px" w="full" />}>
        <UserInfo id={userId} />
      </Suspense>

      <Stack direction="column">
        <Stack>
          <Text as="small">Cerby Mutation Data:</Text>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Stack>
        <Stack>
          <Text as="small">Add Mutation Data:</Text>
          <pre>{JSON.stringify(addUserData, null, 2)}</pre>
        </Stack>
      </Stack>

      <ButtonGroup>
        <Button
          onClick={() =>
            mutate({ id: userId, name: `User ${crypto.randomUUID().slice(0, 8)}` })
          }
          size="sm"
        >
          Update Cerby
        </Button>
        <Button
          size="sm"
          usage="outlined-subtle"
          onClick={() =>
            addUserMutate({
              id: crypto.randomUUID(),
              name: `User ${crypto.randomUUID()}`,
            })
          }
        >
          Add User
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
