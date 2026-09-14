'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, PromptModal, Show, usePromptModal } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export const NOPE = 'No, cancel'

export function NonDestructiveFeature() {
  const prompt = usePromptModal()
  const [userValue, setUserValue] = useSignal<string | null>(null)

  const handleClick = async () => {
    const key = 'super-secret'
    const userPrompt = await prompt.show({
      heading: 'Enter passkey',
      description:
        'In order to view the super secret stuff you need to enter your passkey.',
      key,
      actionText: 'Copy passkey',
      cancelText: NOPE,
    })
    if (userPrompt === key) setUserValue('Super secret stuff')
  }

  return (
    <>
      <HStack gap="md">
        <Button onClick={handleClick}>Non-destructive</Button>
      </HStack>

      <Show when={userValue !== null}>
        <p>Passkey: {userValue}</p>
      </Show>
    </>
  )
}

export function BasicDemo() {
  return (
    <PromptModal>
      <NonDestructiveFeature />
    </PromptModal>
  )
}
