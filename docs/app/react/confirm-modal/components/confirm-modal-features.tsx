'use client'

import { Button, Show, useConfirmModal } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { useCallback, useState } from 'react'

const NOPE = 'No, cancel'

export function NonDestructiveFeature() {
  const confirm = useConfirmModal()
  const [consent, setConsent] = useState<boolean | null>(null)

  const handleClick = useCallback(async () => {
    const userConsent = await confirm.show({
      heading: 'Add new payment method?',
      description: (
        <>
          This will add a new payment method to your account to be billed for
          future purchases.{' '}
          <a
            className={css({
              textStyle: 'link',
            })}
            href="#"
          >
            Learn more
          </a>
          .
        </>
      ),
      actionText: 'Yes, add payment method',
      cancelText: NOPE,
    })
    setConsent(userConsent)
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

      <Show when={consent !== null}>
        <p>User consent: {JSON.stringify(consent)}</p>
      </Show>
    </>
  )
}

export function DestructiveFeature() {
  const confirm = useConfirmModal()
  const [consent, setConsent] = useState<boolean | null>(null)

  const handleDestructiveClick = useCallback(async () => {
    const userConsent = await confirm.show({
      kind: 'destructive',
      heading: 'Remove payment method?',
      description: 'This is a permanent action and cannot be undone.',
      actionText: 'Yes, delete',
      cancelText: NOPE,
    })
    setConsent(userConsent)
  }, [confirm])

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

      <Show when={consent !== null}>
        <p>User consent: {JSON.stringify(consent)}</p>
      </Show>
    </>
  )
}

export function ConfirmOverviewFeature() {
  const confirm = useConfirmModal()
  const [consent, setConsent] = useState<boolean | null>(null)

  const handleClick = useCallback(async () => {
    const userConsent = await confirm.show({
      heading: 'Add new payment method?',
      description:
        'This will add a new payment method to your account to be billed for future purchases. This is even longer and should never happen because it is considered a very bad practice. And is longer than three lines of copy.',
      actionText: 'Yes, add payment method',
      cancelText: NOPE,
    })
    setConsent(userConsent)
  }, [confirm])

  const handleDestructiveClick = useCallback(async () => {
    const userConsent = await confirm.show({
      kind: 'destructive',
      heading: 'Remove payment method?',
      description: 'This is a permanent action and cannot be undone.',
      actionText: 'Yes, delete',
      cancelText: NOPE,
    })
    setConsent(userConsent)
  }, [confirm])

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

      <Show when={consent !== null}>
        <p>User consent: {JSON.stringify(consent)}</p>
      </Show>
    </>
  )
}
