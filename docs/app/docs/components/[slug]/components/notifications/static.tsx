'use client'

import {
  Button,
  createToaster,
  NotificationCenter,
  toaster,
} from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import { useCallback } from 'react'
import messagesData from './messages.data.json'
import subtleData from './subtle.data.json'

export function CustomNotification() {
  return null
}

function Feature() {
  const handleInfo = useCallback(() => {
    const message = messagesData.info
    toaster.create({
      ...message,
      action: {
        ...message.action,
        onClick: () => {
          window.location.reload()
        },
      },
    })
  }, [])

  const handleSuccess = useCallback(() => {
    const message = messagesData.success
    toaster.create(message)
  }, [])

  const handleWarning = useCallback(() => {
    const message = messagesData.warning
    toaster.create(message)
  }, [])

  const handleError = useCallback(() => {
    const message = messagesData.danger
    toaster.create(message)
  }, [])

  const handleLoading = useCallback(() => {
    const message = messagesData.loading
    toaster.create(message)
  }, [])

  return (
    <HStack>
      <Button onClick={handleInfo}>info</Button>
      <Button onClick={handleSuccess}>success</Button>
      <Button onClick={handleWarning}>warning</Button>
      <Button onClick={handleError}>error</Button>
      <Button onClick={handleLoading}>loading</Button>
    </HStack>
  )
}

export function OverviewDemo() {
  return <Feature />
}

export function CustomConfigDemo() {
  const customToaster = createToaster({
    gap: 24,
    overlap: false,
    placement: 'bottom-end',
  })

  return (
    <>
      <HStack>
        <Button
          onClick={() => {
            customToaster.create({
              title: 'Custom Toaster',
              description:
                'This notification is using a custom toaster configuration.',
              type: 'success',
            })
          }}
        >
          Show Notification
        </Button>
      </HStack>

      <NotificationCenter toaster={customToaster} />
    </>
  )
}

export function SubtleDemo() {
  const handleInfo = useCallback(() => {
    const message = subtleData.infoSubtle
    toaster.create({
      ...message,
      action: {
        ...message.action,
        onClick: () => {
          window.location.reload()
        },
      },
    })
  }, [])

  const handleSuccess = useCallback(() => {
    const message = subtleData.successSubtle
    toaster.create(message)
  }, [])

  const handleWarning = useCallback(() => {
    const message = subtleData.warningSubtle
    toaster.create(message)
  }, [])

  const handleError = useCallback(() => {
    const message = subtleData.dangerSubtle
    toaster.create(message)
  }, [])

  const handleLoading = useCallback(() => {
    const message = subtleData.loadingSubtle
    toaster.create(message)
  }, [])

  return (
    <HStack>
      <Button onClick={handleInfo}>info-subtle</Button>
      <Button onClick={handleSuccess}>success-subtle</Button>
      <Button onClick={handleWarning}>warning-subtle</Button>
      <Button onClick={handleError}>error-subtle</Button>
      <Button onClick={handleLoading}>loading-subtle</Button>
    </HStack>
  )
}
