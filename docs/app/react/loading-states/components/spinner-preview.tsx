'use client'

import { Button, Show, Spinner, Tag } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { VStack } from '@cerberus-design/styled-system/jsx'
import { hstack } from '@cerberus-design/styled-system/patterns'
import { useCallback, useState } from 'react'

interface PageData {
  headline: string
  description: string
  updated: boolean
  saving: boolean
}

export function OverviewSpinnerPreview() {
  // Don't ever do this in a real app - use a reducer for non-primitive state
  const [data, setData] = useState<PageData>({
    headline: 'This is some data about something',
    description: 'This is a detail about that text of something.',
    updated: false,
    saving: false,
  })
  const pending = data.saving && !data.updated

  const handleClick = useCallback(() => {
    setData((prev) => ({
      ...prev,
      saving: true,
    }))

    setTimeout(() => {
      setData((prev) => ({
        ...prev,
        headline: 'New headline with updated data',
        description: 'The data has been saved successfully.',
        updated: true,
        saving: false,
      }))
    }, 2000)
  }, [])

  const handleReset = useCallback(() => {
    setData((prev) => ({
      ...prev,
      headline: 'This is some data about something',
      description: 'This is a detail about that text of something.',
      updated: false,
      saving: false,
    }))
  }, [])

  return (
    <VStack w="full">
      <Show when={data.updated}>
        <Button palette="secondaryAction" usage="ghost" onClick={handleReset}>
          Reset Example
        </Button>
      </Show>
      <div
        className={hstack({
          border: '1px solid',
          borderColor: 'page.border.initial',
          justify: 'space-between',
          pxi: '4',
          py: 2,
          rounded: 'lg',
          w: '3/4',
        })}
      >
        <div>
          <p
            className={css({
              textStyle: 'body-md',
            })}
          >
            {data.headline}
          </p>
          <small
            className={css({
              color: 'page.text.100',
              textStyle: 'body-xs',
            })}
          >
            {data.description}
          </small>
        </div>

        <Show when={!data.updated}>
          <Button disabled={pending} onClick={handleClick}>
            <Show when={pending} fallback={<>Save</>}>
              Saving
              <Spinner size="1em" />
            </Show>
          </Button>
        </Show>
      </div>

      <Tag shape="pill">Spinner</Tag>
    </VStack>
  )
}
