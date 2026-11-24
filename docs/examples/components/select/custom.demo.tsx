'use client'

import { Box } from '@/styled-system/jsx'
import { hstack } from '@/styled-system/patterns'
import { ChevronDownOutline } from '@carbon/icons-react'
import {
  createSelectCollection,
  For,
  Portal,
  Select,
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
      <Select.Root collection={collection}>
        <Select.Label
          paddingBlock="2"
          textStyle="body-sm"
          textTransform="uppercase"
        >
          Select a custom relative
        </Select.Label>

        <Select.Control>
          <Select.Trigger
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
            <Select.ValueText placeholder="Choose a custom option" />
            <Select.Indicator
              transitionProperty="transform"
              transitionDuration="fast"
              _open={{
                transform: 'rotate(180deg)',
              }}
            >
              <ChevronDownOutline />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>

        <Portal>
          <Select.Positioner w="var(--reference-width)">
            <Select.Content bgColor="danger.surface.initial" p="md">
              <Select.ItemGroup>
                <Select.ItemGroupLabel
                  fontWeight="bold"
                  textStyle="label-sm"
                  textTransform="uppercase"
                >
                  The fam
                </Select.ItemGroupLabel>

                <For each={collection.items}>
                  {(item, idx) => (
                    <Select.Item key={item.value} item={item}>
                      <Select.ItemText
                        color="white"
                        display="inline-block"
                        style={{
                          paddingInlineStart: `calc(16px * ${idx})`,
                        }}
                      >
                        {item.label}
                      </Select.ItemText>
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                    </Select.Item>
                  )}
                </For>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  )
}
