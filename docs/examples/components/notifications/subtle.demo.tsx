'use client'

import { HStack } from '@/styled-system/jsx'
import { toaster, Button } from '@cerberus-design/react'
import { useCallback } from 'react'
import { subtleMessages } from './subtle.data'

export function SubtleDemo() {
  const handleInfo = useCallback(() => {
    const message = subtleMessages.infoSubtle
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
    const message = subtleMessages.successSubtle
    toaster.create(message)
  }, [])

  const handleWarning = useCallback(() => {
    const message = subtleMessages.warningSubtle
    toaster.create(message)
  }, [])

  const handleError = useCallback(() => {
    const message = subtleMessages.dangerSubtle
    toaster.create(message)
  }, [])

  const handleLoading = useCallback(() => {
    const message = subtleMessages.loadingSubtle
    toaster.create(message)
  }, [])

  return (
    <HStack>
      <Button size="sm" onClick={handleInfo}>
        info-subtle
      </Button>
      <Button size="sm" onClick={handleSuccess}>
        success-subtle
      </Button>
      <Button size="sm" onClick={handleWarning}>
        warning-subtle
      </Button>
      <Button size="sm" onClick={handleError}>
        error-subtle
      </Button>
      <Button size="sm" onClick={handleLoading}>
        loading-subtle
      </Button>
    </HStack>
  )
}
