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
import Link from 'next/link'

export function NoAvatarDemo() {
  return (
    <ConfirmModal>
      <Feature />
    </ConfirmModal>
  )
}

function Feature() {
  const confirm = useConfirmModal()
  const [consent, setConsent] = useSignal<boolean | null>(null)

  const handleClick = async () => {
    const userConsent = await confirm.show({
      showAvatar: false,
      heading: 'Add new payment method?',
      description: (
        <>
          This will add a new payment method to your account to be billed for future
          purchases. <Link href="#">Learn more</Link>.
        </>
      ),
      actionText: 'Yes, add payment method',
      cancelText: 'No, cancel',
    })
    setConsent(userConsent)
  }

  return (
    <HStack gap="md">
      <HStack gap="md">
        <Button onClick={handleClick}>Confirm</Button>
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
