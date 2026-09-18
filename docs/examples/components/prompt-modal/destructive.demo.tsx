'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, PromptModal, Show, usePromptModal } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { NOPE } from './basic.demo'

function DestructiveFeature() {
  const prompt = usePromptModal()
  const [userValue, setUserValue] = useSignal<string | null>(null)

  const handleDestructiveClick = async () => {
    const key = 'DELETE'
    const userConsent = await prompt.show({
      kind: 'destructive',
      heading: 'Remove payment method?',
      description: 'This is a permanent action and cannot be undone.',
      key,
      actionText: 'Yes, delete',
      cancelText: NOPE,
    })
    if (userConsent === key) setUserValue('Payment method removed')
  }

  return (
    <>
      <HStack gap="md">
        <Button palette="danger" onClick={handleDestructiveClick}>
          Destructive
        </Button>
      </HStack>

      <Show when={userValue !== null}>
        <p>{userValue}</p>
      </Show>
    </>
  )
}

export function DestructiveDemo() {
  return (
    <PromptModal>
      <DestructiveFeature />
    </PromptModal>
  )
}
