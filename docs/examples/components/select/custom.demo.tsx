'use client'

import { Box } from '@/styled-system/jsx'
import { hstack } from '@/styled-system/patterns'
import { ChevronDownOutline } from '@carbon/icons-react'
import {
  createSelectCollection,
  For,
  Portal,
  SelectParts,
} from '@cerberus-design/react'

const collection = createSelectCollection([
  { label: 'Hades', value: '1-hades' },
  { label: 'Persephone', value: '1-persephone' },
  { label: 'Zeus', value: '1-zeus', disabled: true },
  { label: 'Poseidon', value: '1-poseidon' },
  { label: 'Hera', value: '1-hera' },
])

export function CustomDemo() {
  return (
    <Box w="1/2">
      <SelectParts.Root collection={collection}>
        <SelectParts.Label
          paddingBlock="2"
          textStyle="body-sm"
          textTransform="uppercase"
        >
          Select a custom relative
        </SelectParts.Label>

        <SelectParts.Control>
          <SelectParts.Trigger
            bgColor="black"
            color="danger.surface.initial"
            paddingInline="md"
            paddingBlock="sm"
            _hover={{
              bgColor: 'danger.surface.initial',
              color: 'white',
            }}
            className={hstack({
              justify: 'space-between',
              w: 'full',
            })}
          >
            <SelectParts.ValueText placeholder="Choose a custom option" />
            <SelectParts.Indicator
              transitionProperty="transform"
              transitionDuration="fast"
              _open={{
                transform: 'rotate(180deg)',
              }}
            >
              <ChevronDownOutline />
            </SelectParts.Indicator>
          </SelectParts.Trigger>
          <SelectParts.ClearTrigger>Clear</SelectParts.ClearTrigger>
        </SelectParts.Control>

        <Portal>
          <SelectParts.Positioner w="var(--reference-width)">
            <SelectParts.Content bgColor="danger.surface.initial" p="md">
              <SelectParts.ItemGroup>
                <SelectParts.ItemGroupLabel
                  fontWeight="bold"
                  textStyle="label-sm"
                  textTransform="uppercase"
                >
                  The fam
                </SelectParts.ItemGroupLabel>

                <For each={collection.items}>
                  {(item, idx) => (
                    <SelectParts.Item key={item.value} item={item}>
                      <SelectParts.ItemText
                        color="white"
                        display="inline-block"
                        style={{
                          paddingInlineStart: `calc(16px * ${idx})`,
                        }}
                      >
                        {item.label}
                      </SelectParts.ItemText>
                      <SelectParts.ItemIndicator>✓</SelectParts.ItemIndicator>
                    </SelectParts.Item>
                  )}
                </For>
              </SelectParts.ItemGroup>
            </SelectParts.Content>
          </SelectParts.Positioner>
        </Portal>
      </SelectParts.Root>
    </Box>
  )
}
