'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { DataGrid } from '@cerberus-design/data-grid'
import { Button, Tag, TagProps, Text } from '@cerberus-design/react'
import {
  createMutation,
  createQuery,
  setQueryData,
  useMutation,
  useQuery,
  useSignal,
} from '@cerberus-design/signals'
import { Suspense } from 'react'
import { createFakeQuery } from '../quick-start/data'
import { columnHelper } from '../quick-start/helper.demo'

export function ColumnDemo() {
  const data = createFakeQuery(25)
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data()} />
    </HStack>
  )
}

// --- Column Definitions ---

export const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    features: {
      pinning: {
        defaultPosition: 'left',
      },
      sort: true,
    },
    cell: ({ row, value }) => (
      // Granular Suspense boundary protecting just this cell
      <HStack justify="space-between" w="full">
        <Suspense fallback={<Box aria-busy h="24px" rounded="full" w="full" />}>
          <SmartColumn row={String(row.id)} value={value} />
        </Suspense>
      </HStack>
    ),
  }),

  columnHelper.accessorFn((row) => `${row.firstName.slice(0, 1)} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    cell: ({ value }) => <Text textStyle="body-md">{value}</Text>,
  }),
]

// --- Smart Column Component ---

// --- Smart Column Component ---
interface SmartColumnProps {
  row: string
  value: string
}

function SmartColumn(props: SmartColumnProps) {
  const accessor = getRowStage(props.row)

  // 1. useQuery handles Suspense and gives us the raw data
  const stage = useQuery(accessor)

  // 2. The Magic of Signals: We can read the raw accessor directly
  // to get the background meta-data without disrupting React Suspense!
  const rawState = accessor()
  const isBackgroundFetching = rawState.status === 'pending'

  // Visual helper for the tag colors
  const palette: Record<string, TagProps['palette']> = {
    Pending: 'page',
    'Signed Up': 'info',
    'In Review': 'warning',
    Verified: 'info',
    Onboarding: 'info',
    Active: 'success',
  }

  return (
    <>
      <HStack gap="sm">
        <Text textStyle="body-md">{props.value}</Text>
        <Tag palette={palette[stage]}>{stage}</Tag>
      </HStack>

      {/* Pass the background fetching status to the trigger */}
      <SmartTrigger
        row={props.row}
        currentStage={stage}
        isFetching={isBackgroundFetching}
      />
    </>
  )
}

// --- Smart Trigger (Race Condition Protected) ---
function SmartTrigger(props: {
  row: string
  currentStage: string
  isFetching: boolean
}) {
  const { mutate } = useMutation(updateRowStage)
  const [isMutating, setIsMutating] = useSignal<boolean>(false)

  async function handleUpdate() {
    setIsMutating(true)
    try {
      await mutate({ id: props.row, stage: getNextStage(props.currentStage) })
    } finally {
      setIsMutating(false)
    }
  }

  // Hide the button if they have reached the final stage
  if (props.currentStage === 'Active') return null

  return (
    <Button
      onClick={handleUpdate}
      size="sm"
      // The button now spins if it's mutating OR if background SWR is verifying the data!
      pending={isMutating || props.isFetching}
    >
      Next Stage
    </Button>
  )
}

// --- Global Query & Mutation Factories ---
const getRowStage = createQuery((id: string) => api.getStage(id), 'queryRowStage')

const updateRowStage = createMutation(
  (payload: { id: string; stage: string }) => api.updateStage(payload),
  {
    // Optimistic UI: Instantly snap the tag to the new stage
    onMutate: (vars) => {
      setQueryData(getRowStage.key(vars.id), () => vars.stage)
    },
    // Background SWR: Verify the data matches the server
    invalidate: (_, vars) => [getRowStage.key(vars.id)],
  },
)

// --- Fake Database & API ---

const fakeNotesDB = new Map<string, string>()
const stages = ['Pending', 'Signed Up', 'In Review', 'Verified', 'Onboarding', 'Active']

const getNextStage = (current: string) => {
  const currentIndex = stages.indexOf(current)
  if (currentIndex === -1 || currentIndex === stages.length - 1) return stages[1]
  return stages[currentIndex + 1]
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const api = {
  getStage: async (id: string) => {
    await delay(1000) // Simulate fetching from a DB
    return fakeNotesDB.get(id) || 'Pending'
  },
  updateStage: async (payload: { id: string; stage: string }) => {
    await delay(800) // Simulate server mutation
    fakeNotesDB.set(payload.id, payload.stage)
    return payload.stage
  },
}
