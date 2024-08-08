'use client'

import { Button, Show, usePromptModal } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'
import { useCallback, useState } from 'react'

const NOPE = 'No, cancel'

export function NonDestructiveFeature() {
  const prompt = usePromptModal()
  const [userValue, setUserValue] = useState<string | null>(null)

  const handleClick = useCallback(async () => {
    const key = 'SUPER_SECRET'
    const userPrompt = await prompt.show({
      heading: 'Enter passkey',
      description:
        'In order to view the super secret stuff you need to enter your passkey.',
      key,
      actionText: 'Copy passkey',
      cancelText: NOPE,
    })
    if (userPrompt === key) setUserValue('Super secret stuff')
  }, [confirm])

  return (
    <>
      <div
        className={hstack({
          gap: '4',
        })}
      >
        <Button onClick={handleClick}>Non-destructive</Button>
      </div>

      <Show when={userValue !== null}>
        <p>Passkey: {userValue}</p>
      </Show>
    </>
  )
}

export function DestructiveFeature() {
  const prompt = usePromptModal()
  const [userValue, setUserValue] = useState<string | null>(null)

  const handleDestructiveClick = useCallback(async () => {
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
  }, [prompt])

  return (
    <>
      <div
        className={hstack({
          gap: '4',
        })}
      >
        <Button palette="danger" onClick={handleDestructiveClick}>
          Destructive
        </Button>
      </div>

      <Show when={userValue !== null}>
        <p>{userValue}</p>
      </Show>
    </>
  )
}

export function PromptOverviewFeature() {
  const prompt = usePromptModal()
  const [userValue, setUserValue] = useState<string | null>(null)

  const handleClick = useCallback(async () => {
    const key = 'SUPER_SECRET'
    const userPrompt = await prompt.show({
      heading: 'Enter passkey',
      description:
        'In order to view the super secret stuff you need to enter your passkey.',
      key,
      actionText: 'Copy passkey',
      cancelText: NOPE,
    })
    if (userPrompt === key) setUserValue('Super secret stuff')
  }, [confirm])

  const handleDestructiveClick = useCallback(async () => {
    const key = 'DELETE'
    const userPrompt = await prompt.show({
      kind: 'destructive',
      heading: 'Remove payment method?',
      description: 'This is a permanent action and cannot be undone.',
      key,
      actionText: 'Yes, delete',
      cancelText: NOPE,
    })
    if (userPrompt === key) setUserValue('Payment method removed')
  }, [prompt])

  return (
    <>
      <div
        className={hstack({
          gap: '4',
        })}
      >
        <Button onClick={handleClick}>Non-destructive</Button>
        <Button palette="danger" onClick={handleDestructiveClick}>
          Destructive
        </Button>
      </div>

      <Show when={userValue !== null}>
        <p>User value: {userValue}</p>
      </Show>
    </>
  )
}
