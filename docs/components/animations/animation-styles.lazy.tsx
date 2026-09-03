'use client'

import { Center, HStack, Square, VStack } from '@/styled-system/jsx'
import { Button, For } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import animationStylesData from 'styled-system/specs/animation-styles.json'

const defaultOption = animationStylesData.data[0].name

export default function AnimationStyles() {
  const [activeOption, setActiveOption] = useSignal<string>(defaultOption)

  return (
    <VStack alignItems="flex-start" gap="lg" w="full">
      <HStack gap="md" flexWrap="wrap" w="full">
        <For each={animationStylesData.data}>
          {(option) => (
            <Button
              key={option.name}
              onClick={() => {
                setActiveOption(option.name)
              }}
              size="sm"
            >
              {option.name}
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
