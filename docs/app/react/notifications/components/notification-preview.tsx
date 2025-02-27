'use client'

import { Button, toaster } from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { useCallback } from 'react'
import messagesData from './messages.data.json'

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
  }, [toaster.create])

  const handleSuccess = useCallback(() => {
    const message = messagesData.success
    toaster.create(message)
  }, [toaster.create])

  const handleWarning = useCallback(() => {
    const message = messagesData.warning
    toaster.create(message)
  }, [toaster.create])

  const handleError = useCallback(() => {
    const message = messagesData.danger
    toaster.create(message)
  }, [toaster.create])

  const handleLoading = useCallback(() => {
    const message = messagesData.loading
    toaster.create(message)
  }, [toaster.create])

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
