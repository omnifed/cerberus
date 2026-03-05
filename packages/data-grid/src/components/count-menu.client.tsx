'use client'

import {
  createSelectCollection,
  Field,
  For,
  Option,
  SelectParts,
  SelectRootProps,
  useCerberusContext,
} from '@cerberus-design/react'
import { Box, HStack } from 'styled-system/jsx'
import { useSignalValue } from '../adapter.client'
import { useDataGridContext } from '../context.client'

interface CountMenuProps {
  onValueChange?: SelectRootProps['onValueChange']
}

export function CountMenu(props: CountMenuProps) {
  const state = useDataGridContext()
  const { icons } = useCerberusContext()

  const pageSize = useSignalValue(state.pageSize)
  const range = useSignalValue(state.pageRange)

  const Icon = icons.caretDown

  const collection = createSelectCollection(
    range.map((size) => {
      const sizeStr = String(size)
      return { value: sizeStr, label: sizeStr }
    }),
  )

  return (
    <Box>
      <Field label="Select a page size" hideLabel flexDirection="row">
        <SelectParts.Root
          {...props}
          collection={collection}
          defaultValue={[String(pageSize)]}
          size="sm"
        >
          <SelectParts.Control>
            <SelectParts.Trigger
              border="none"
              minW="initial"
              gap="xs"
              ps="0"
              pe="0"
            >
              <SelectParts.ValueText />
              <HStack>
                <SelectParts.Indicator>
                  <Icon />
                </SelectParts.Indicator>
              </HStack>
            </SelectParts.Trigger>
          </SelectParts.Control>

          <SelectParts.Positioner>
            <SelectParts.Content minW="7rem">
              <For each={collection.items}>
                {(item) => <Option key={item.value} item={item} />}
              </For>
            </SelectParts.Content>
          </SelectParts.Positioner>
        </SelectParts.Root>
      </Field>
    </Box>
  )
}
