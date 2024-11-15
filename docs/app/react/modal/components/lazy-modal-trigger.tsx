'use client'

import { Button, Show, Spinner, useModal } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'
import dynamic from 'next/dynamic'
import { useCallback, useState } from 'react'
import type { LazyModalData } from './lazy-modal'

const LazyModal = dynamic(() => import('./lazy-modal'))

interface DataProps {
  pending: boolean
  result: LazyModalData['data'] | null
  error: Error | null
}

async function fakeFetch() {
  return new Promise<LazyModalData['data']>((resolve) => {
    setTimeout(() => {
      resolve({
        heading: 'Lazy Modal',
        content: 'This is a lazy-loaded modal.',
      })
    }, 1000)
  })
}

export default function LazyModalTrigger() {
  const modal = useModal()
  const [data, setData] = useState<DataProps>({
    pending: false,
    result: null,
    error: null,
  })

  const handlePrefetchData = useCallback(async () => {
    if (data.result === null && !data.pending) {
      try {
        const result = await fakeFetch()
        setData({
          pending: false,
          result,
          error: null,
        })
        return result
      } catch (error) {
        setData({
          pending: false,
          result: null,
          error: error as Error,
        })
      }
    }

    setData((prev) => ({
      ...prev,
      pending: false,
    }))
  }, [data.result, data.pending])

  const handleShow = useCallback(async () => {
    setData((prev) => ({
      ...prev,
      pending: true,
    }))
    await handlePrefetchData()
    modal.show()
  }, [modal])

  return (
    <Box>
      <Button
        disabled={data.pending}
        onClick={handleShow}
        onMouseEnter={handlePrefetchData}
      >
        Open Modal
        <Show when={data.pending}>
          <Spinner size={24} />
        </Show>
      </Button>

      <Show when={data.result !== null}>
        <LazyModal {...modal} data={data.result!} />
      </Show>
    </Box>
  )
}
