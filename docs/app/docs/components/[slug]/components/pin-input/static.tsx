'use client'

import { PinInput, PinInputParts, Field } from '@cerberus-design/react'
import { HStack } from '@/styled-system/jsx'

export function StaticPreview() {
  return (
    <HStack w="1/2">
      <Field label="Enter PIN">
        <PinInput />
      </Field>
    </HStack>
  )
}

export function CountPreview() {
  return (
    <HStack w="1/2">
      <Field label="5 Digits">
        <PinInput placeholder={undefined} count={5} />
      </Field>
    </HStack>
  )
}

export function SizesPreview() {
  return (
    <HStack justify="space-between" w="1/2">
      <Field label="Medium">
        <PinInput size="md" />
      </Field>
      <Field label="Large">
        <PinInput size="lg" />
      </Field>
    </HStack>
  )
}

export function BlurCompletePreview() {
  return (
    <HStack w="1/2">
      <PinInput
        blurOnComplete
        onValueComplete={() => alert('Input complete!')}
      />
    </HStack>
  )
}

export function CustomPreview() {
  return (
    <HStack w="1/2">
      <PinInputParts.Root
        css={{
          w: 'full',
        }}
      >
        <PinInputParts.Control
          css={{
            transform: 'translateX(-4px)',
          }}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <PinInputParts.Input
              key={index}
              index={index}
              css={{
                border: '2px solid',
                borderColor: 'black',
                borderRadius: 'md',
                h: '24',
                w: '24',
                textAlign: 'center',
                fontSize: 'lg',
                lineHeight: '12',
                '&:focus': {
                  borderColor: 'danger.bg.initial',
                  boxShadow: '0 0 0 3px rgba(255, 69, 58, 0.6)',
                },
              }}
            />
          ))}
        </PinInputParts.Control>
        <PinInputParts.HiddenInput />
      </PinInputParts.Root>
    </HStack>
  )
}
