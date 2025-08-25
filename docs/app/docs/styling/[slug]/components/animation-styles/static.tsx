'use client'

import { useState } from 'react'
import {
  Box,
  Center,
  EmphasizedSlideIn,
  HStack,
  Square,
  VStack,
} from '@/styled-system/jsx'
import { Button, For, Show } from '@cerberus-design/react'
import options from './options.json' assert { type: 'json' }

export function AnimationStylesDemo() {
  const [activeOption, setActiveOption] = useState<string>(options[0].value)

  return (
    <VStack alignItems="flex-start" gap="lg" w="full">
      <HStack gap="md" flexWrap="wrap" w="full">
        <For each={options}>
          {(option) => (
            <Button
              key={option.id}
              onClick={() => {
                setActiveOption(option.value)
              }}
              size="sm"
            >
              {option.value}
            </Button>
          )}
        </For>
      </HStack>

      <Square
        data-animation={activeOption}
        data-placement="top"
        bgColor="page.surface.100"
        size="16rem"
        css={{
          animationDuration: 'slow',
          animationFillMode: 'both',
          animationTimingFunction: 'ease-in-out',
          '&[data-animation="emphasized-fade-in"]': {
            animationStyle: 'emphasized-fade-in',
          },
          '&[data-animation="emphasized-fade-out"]': {
            animationStyle: 'emphasized-fade-out',
          },
          '&[data-animation="emphasized-slide-in"]': {
            animationStyle: 'emphasized-slide-in',
          },
          '&[data-animation="emphasized-slide-out"]': {
            animationStyle: 'emphasized-slide-out',
          },
          '&[data-animation="slide-fade-in"]': {
            animationStyle: 'slide-fade-in',
          },
          '&[data-animation="slide-fade-out"]': {
            animationStyle: 'slide-fade-out',
          },
          '&[data-animation="slide-in"]': {
            animationStyle: 'slide-in',
          },
          '&[data-animation="slide-out"]': {
            animationStyle: 'slide-out',
          },
          '&[data-animation="scale-fade-in"]': {
            animationStyle: 'scale-fade-in',
          },
          '&[data-animation="scale-fade-out"]': {
            animationStyle: 'scale-fade-out',
          },
        }}
      >
        <Center>{activeOption}</Center>
      </Square>
    </VStack>
  )
}

export function EmphasizedDemo() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <>
      <Button size="sm" onClick={() => setIsVisible(!isVisible)}>
        <Show when={isVisible} fallback="Show Emphasized Fade In">
          Reset
        </Show>
      </Button>

      <Show when={isVisible}>
        <EmphasizedSlideIn>
          <Box>This content will fade in with emphasis</Box>
        </EmphasizedSlideIn>
      </Show>
    </>
  )
}
