'use client'

import { HStack } from '@/styled-system/jsx'
import { toaster, Button } from '@cerberus-design/react'
import { useCallback } from 'react'
import { messages } from './messages.data'

export function BasicDemo() {
  return <Feature />
}

function Feature() {
  const handleInfo = useCallback(() => {
    const message = messages.info
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
    const message = messages.success
    toaster.create(message)
  }, [])

  const handleWarning = useCallback(() => {
    const message = messages.warning
    toaster.create(message)
  }, [])

  const handleError = useCallback(() => {
    const message = messages.danger
    toaster.create(message)
  }, [])

  const handleLoading = useCallback(() => {
    const message = messages.loading
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
