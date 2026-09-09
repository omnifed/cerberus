'use client'

import { HStack } from '@/styled-system/jsx'
import {
  Button,
  ConfirmModal,
  Show,
  Text,
  useConfirmModal,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function DestructiveDemo() {
  return (
    <ConfirmModal>
      <DestructiveFeature />
    </ConfirmModal>
  )
}

function DestructiveFeature() {
  const confirm = useConfirmModal()
  const [consent, setConsent] = useSignal<boolean | null>(null)

  const handleClick = async () => {
    const userConsent = await confirm.show({
      kind: 'destructive',
      heading: 'Remove payment method?',
      description: 'This is a permanent action and cannot be undone.',
      actionText: 'Yes, delete',
      cancelText: 'Cancel',
    })
    setConsent(userConsent)
  }

  return (
    <HStack gap="md">
      <HStack gap="md">
        <Button palette="danger" onClick={handleClick}>
          Remove
        </Button>
      </HStack>

      <Show when={consent !== null}>
        <Text as="small" textStyle="label-sm">
          User consent:{' '}
          <Text as="span" fontSize="xs" textStyle="mono-xs">
            {JSON.stringify(consent)}
          </Text>
        </Text>
      </Show>
    </HStack>
  )
}
