'use client'

import { Box, HStack, Stack } from '@/styled-system/jsx'
import { Button, Tag, Text } from '@cerberus-design/react'
import {
  createMutation,
  createQuery,
  useMutation,
  useQuery,
} from '@cerberus-design/signals'
import { Suspense } from 'react'

// 1. Define Query Factory
const getUser = createQuery<User, string>(async (id: string) => {
  return await api.getUser(id)
}, 'queryGetUser')

// 2. Define Mutation Factory
const updateUser = createMutation((payload: User) => api.updateUser(payload), {
  // Declarative cache invalidation using factory keys
  invalidate: (_data, vars) => [getUser.key(vars.id)],
})

// 3. Consume in Components seamlessly
function UserProfile(props: { id: User['id'] }) {
  const user = useQuery(getUser(props.id))
  return <Text>{user.name}</Text>
}

export function NoOptmisticDemo() {
  // Pretend this is from the URL or via props.id
  const id = crypto.randomUUID()

  const { mutate, status } = useMutation(updateUser)

  function handleUpdate() {
    mutate({ id, name: `User ${crypto.randomUUID()}` })
  }

  return (
    <HStack gap="lg" w="3/4">
      <Button pending={status === 'pending'} onClick={handleUpdate}>
        <Button.Icon />
        Update Name
      </Button>

      <Stack>
        <Suspense fallback={<Box aria-busy h="44px" rounded="sm" w="366px" />}>
          <UserProfile id={id} />
        </Suspense>
        <Tag w="fit-content">{status}</Tag>
      </Stack>
    </HStack>
  )
}

// API

type User = { id: string; name: string }

const fakeDB = new Map<string, User>()
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const api = {
  getUser: async (id: User['id']) => {
    await delay(500)
    if (!fakeDB.has(id)) {
      fakeDB.set(id, { id, name: `User ${id}` })
    }
    return fakeDB.get(id)!
  },
  updateUser: async (payload: User) => {
    await delay(500)
    fakeDB.set(payload.id, { id: payload.id, name: payload.name })
    return payload
  },
}
