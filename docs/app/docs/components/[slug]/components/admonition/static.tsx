import { Admonition, AdmonitionParts, Tag } from '@cerberus-design/react'
import { Box, VStack, Circle } from 'styled-system/jsx'
import PawIcon from '@/app/components/icons/paw-icon'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Admonition heading="Note">
        This is a page admonition that is commonly use to display a page-level
        informational messages.
      </Admonition>
    </Box>
  )
}

export function PaletteDemo() {
  return (
    <Box w="1/2">
      <Admonition heading="Account Error" palette="danger">
        There is an error with your account. Please contact support within the
        next 7 days to keep access.
      </Admonition>
    </Box>
  )
}

export function UsageDemo() {
  return (
    <Box w="1/2">
      <Admonition heading="Note" usage="outlined">
        This is a page admonition that is commonly use to display a page-level
        informational messages.
      </Admonition>
    </Box>
  )
}

export function OverviewDemo() {
  return (
    <VStack gap="lg">
      <VStack>
        <Admonition heading="When to use">
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
        <Tag>Filled</Tag>
      </VStack>
      <VStack>
        <Admonition heading="When to use" usage="outlined">
          Use this component when you want to display a page-level message.{' '}
          <a href="#">Learn more</a>
        </Admonition>
        <Tag>Outlined</Tag>
      </VStack>
    </VStack>
  )
}

export function CustomDemo() {
  return (
    <Box w="1/2">
      <AdmonitionParts.Root
        css={{
          transform: 'skewX(-10deg)',
        }}
      >
        <AdmonitionParts.Indicator>
          <Circle size="6">
            <PawIcon />
          </Circle>
        </AdmonitionParts.Indicator>

        <AdmonitionParts.Content>
          <AdmonitionParts.Heading
            css={{
              color: 'danger.text.initial',
              textTransform: 'uppercase',
            }}
          >
            Cerberus Forever
          </AdmonitionParts.Heading>
          <AdmonitionParts.Description>
            President&apos;s are temporary, but Cerberus is forever.
          </AdmonitionParts.Description>
        </AdmonitionParts.Content>
      </AdmonitionParts.Root>
    </Box>
  )
}
