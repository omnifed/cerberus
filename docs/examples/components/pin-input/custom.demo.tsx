'use client'

import { HStack } from '@/styled-system/jsx'
import { PinInputParts } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <HStack>
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
