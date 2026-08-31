'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, cerberus, For, Text } from '@cerberus-design/react'
import {
  Accessor,
  createSignal,
  createStoreContext,
  ReactiveText,
  useRead,
} from '@cerberus-design/signals'

type MyStore = {
  users: Accessor<string[]>
  selectedUser: Accessor<string | null>
  setSelectedUser: (user: string | null) => void
  addUser: (user: string) => void
}

function myStore(): MyStore {
  const [users, setUsers] = createSignal<string[]>([])
  const [selectedUser, setSelectedUser] = createSignal<string | null>(null)

  return {
    users,
    selectedUser,
    setSelectedUser: (user: string | null) => setSelectedUser(user),
    addUser: (newUser: string) => {
      setUsers([...users(), newUser])
    },
  }
}

const { StoreProvider, useStore } = createStoreContext<MyStore>()

// Components

export function BasicDemo() {
  return (
    <StoreProvider createStore={myStore}>
      <UserList />
    </StoreProvider>
  )
}

function UserList() {
  const store = useStore()
  const users = useRead(store.users)

  return (
    <Stack direction="column" gap="md" w="3/4">
      <Stack direction="column" gap="md" w="full">
        <Text>
          Selected: <ReactiveText data={store.selectedUser} />
        </Text>

        <Button
          size="sm"
          onClick={() => {
            store.addUser(crypto.randomUUID())
          }}
        >
          Add User
        </Button>
      </Stack>

      <cerberus.ul display="flex" flexDirection="column" gap="md" w="full">
        <For each={users}>
          {(user) => (
            <li key={user}>
              <HStack justify="space-between" w="full">
                {user}
                <Button size="sm" onClick={() => store.setSelectedUser(user)}>
                  Select
                </Button>
              </HStack>
            </li>
          )}
        </For>
      </cerberus.ul>
    </Stack>
  )
}
