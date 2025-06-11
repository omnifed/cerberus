import {
  AccordionItemGroup,
  Accordion,
  Show,
  For,
  AccordionParts,
} from '@cerberus-design/react'
import Image from 'next/image'
import { Box } from 'styled-system/jsx'
import data from './data.json'
import { Suspense } from 'react'

interface AccordionDataItem {
  id: number
  heading: string
  content: string | null
  value: string
}

export function StaticPreview(props: {
  size?: 'lg' | 'sm'
  indicatorPosition?: 'start' | 'end'
}) {
  return (
    <Box w="2/3">
      <Accordion defaultValue={['one']} size={props.size}>
        <For each={data}>
          {(item: AccordionDataItem) => (
            <AccordionItemGroup
              heading={item.heading}
              key={item.id}
              value={item.value}
              indicatorPosition={props.indicatorPosition}
            >
              <Show when={item.content !== null} fallback={<FallbackContent />}>
                {item.content}
              </Show>
            </AccordionItemGroup>
          )}
        </For>
      </Accordion>
    </Box>
  )
}

function FallbackContent() {
  return (
    <Box position="relative" w="full">
      <Suspense>
        <Image
          alt="A fiery cerberus"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d7b49a9-2590-4dda-88ad-8046da56428b/dg97zza-65055527-eaf3-48e6-86aa-cf70a0880eea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkN2I0OWE5LTI1OTAtNGRkYS04OGFkLTgwNDZkYTU2NDI4YlwvZGc5N3p6YS02NTA1NTUyNy1lYWYzLTQ4ZTYtODZhYS1jZjcwYTA4ODBlZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BT7UC12eP5ibJs6uEYPIOQNQ6Xdnvw1ttIrCEgPvcSk"
          height={447}
          width={794}
        />
      </Suspense>
    </Box>
  )
}

export function SizesPreview() {
  return <StaticPreview size="sm" />
}

export function IndicatorPositionPreview() {
  return <StaticPreview indicatorPosition="start" />
}

export function CustomPreview() {
  return (
    <Box w="2/3">
      <AccordionParts.Root
        css={{
          transform: 'skewX(-10deg)',
        }}
      >
        <AccordionParts.Item
          css={{
            bgColor: 'black',
            borderColor: 'red',
          }}
          value="one"
        >
          <AccordionParts.ItemTrigger
            css={{
              color: 'red',
            }}
            data-indicator-position="start"
          >
            <AccordionParts.ItemIndicator>🔥</AccordionParts.ItemIndicator>
            Cerberus
          </AccordionParts.ItemTrigger>

          <AccordionParts.ItemContent
            css={{
              color: 'white',
              paddingInline: 'md',
              textStyle: 'body-md',
            }}
          >
            Cerberus is the three-headed dog that guards the gates of the
            Underworld and our sweet baby boi protecting the integrity of your
            design system.
          </AccordionParts.ItemContent>
        </AccordionParts.Item>
      </AccordionParts.Root>
    </Box>
  )
}
