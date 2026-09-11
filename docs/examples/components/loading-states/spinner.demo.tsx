'use client'

import { delay } from '@/examples/data-grid/api'
import { Button, Show, Tag } from '@cerberus-design/react'
import {
  createMutation,
  createQuery,
  setQueryData,
  useMutation,
  useQuery,
} from '@cerberus-design/signals'
import { css } from 'styled-system/css'
import { HStack, VStack } from 'styled-system/jsx'

export function SpinnerDemo() {
  const data = useQuery(queryData('1'))
  const { mutate, status } = useMutation(updateData)

  const handleClick = () => mutate('2')
  const handleReset = () => mutate('1')

  return (
    <VStack w="full">
      <Show when={data}>
        <Button palette="secondaryAction" usage="ghost" onClick={handleReset}>
          Reset Example
        </Button>
      </Show>

      <HStack
        border="1px solid"
        borderColor="page.border.initial"
        justify="space-between"
        pxi="4"
        py="2"
        rounded="lg"
        w="3/4"
      >
        <div>
          <p
            className={css({
              textStyle: 'body-md',
            })}
          >
            {data?.headline}
          </p>
          <small
            className={css({
              color: 'page.text.100',
              textStyle: 'body-xs',
            })}
          >
            {data?.description}
          </small>
        </div>

        <Show when={status === 'pending'}>
          <Button pending={status === 'pending'} onClick={handleClick}>
            <Show when={status === 'pending'} fallback={<>Save</>}>
              Saving
            </Show>
            <Button.Icon />
          </Button>
        </Show>
      </HStack>

      <Tag shape="pill">Spinner</Tag>
    </VStack>
  )
}

// Factories

interface PageData {
  headline: string
  description: string
  updated: boolean
  saving: boolean
}

type Opts = '1' | '2'

const queryData = createQuery(async (opts: Opts) => {
  return await fetchData(opts)
}, 'queryData')

const updateData = createMutation((newData: Opts) => fetchData(newData), {
  onMutate: (vars) => {
    setQueryData(queryData.key(vars), (prev) => {
      if (!prev) return { id: vars, name: vars }
      return { ...prev, name: vars }
    })
  },
})

async function fetchData(opts: Opts): Promise<PageData | null> {
  await delay(400)
  if (opts === '1') return null
  return {
    headline: 'This is some data about something',
    description: 'This is a detail about that text of something.',
    updated: false,
    saving: false,
  }
}
