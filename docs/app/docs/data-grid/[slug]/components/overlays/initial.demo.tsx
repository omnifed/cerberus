'use client'

import { Corn } from '@carbon/icons-react'
import { DataGrid } from '@cerberus-design/data-grid'
import { Button, ButtonGroup, Show, Text } from '@cerberus-design/react'
import {
  batch,
  createEffect,
  createSignal,
  onCleanup,
  useQuery,
  useRead,
} from '@cerberus-design/signals'
import { HStack, Stack, VStack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

const store = createInitialDemoStore()

export function InitialDemo() {
  const data = useQuery(queryEmployees(0))

  const load = useRead(store.load)
  const pending = useRead(store.pending)

  return (
    <Stack gap="md" w="3/4">
      <HStack justify="space-between" w="full">
        <ButtonGroup>
          <Button onClick={() => store.initLoad()} size="sm">
            Load
          </Button>
          <Button onClick={() => store.setPending(true)} size="sm">
            Update
          </Button>
        </ButtonGroup>
        <Show when={load}>
          <Button palette="danger" onClick={() => store.reset()} size="sm">
            Reset
          </Button>
        </Show>
      </HStack>

      <HStack h="20rem" w="full">
        <Show when={load}>
          {() => (
            <DataGrid
              columns={columns}
              data={data}
              overlays={{
                initial: <CustomInitial />,
                pending: 'skeleton',
              }}
              pending={pending}
            />
          )}
        </Show>
      </HStack>
    </Stack>
  )
}

function CustomInitial() {
  return (
    <VStack
      animationName="pulse"
      animationIterationCount="infinite"
      color="page.text.100"
      gap="md"
    >
      <Corn size={24} />
      <Text color="page.text.initial" textStyle="body-md">
        Shelling corn...
      </Text>
    </VStack>
  )
}

function createInitialDemoStore() {
  const [load, setLoad] = createSignal<boolean>(false)
  const [pending, setPending] = createSignal<boolean>(false)

  createEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    if (pending() && load()) {
      timeout = setTimeout(() => setPending(false), 2000)
    }
    onCleanup(() => clearTimeout(timeout))
  })

  return {
    load,
    pending,

    setLoad,
    setPending,
    initLoad: () => {
      batch(() => {
        setLoad(true)
        setPending(true)
      })
    },
    reset: () => {
      batch(() => {
        setLoad(false)
        setPending(false)
      })
    },
  }
}
