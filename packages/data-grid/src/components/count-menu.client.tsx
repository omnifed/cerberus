'use client'

import {
  createSelectCollection,
  Field,
  For,
  Option,
  Select,
  SelectRootProps,
  useCerberusContext,
} from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { Box, HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

interface CountMenuProps {
  onValueChange?: SelectRootProps['onValueChange']
}

export function CountMenu(props: CountMenuProps) {
  const state = useDataGridContext()
  const { icons } = useCerberusContext()

  const pageSize = useRead(state.pageSize)
  const range = useRead(state.pageRange)

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
        <Select.Root
          {...props}
          collection={collection}
          defaultValue={[String(pageSize)]}
          size="sm"
        >
          <Select.Control>
            <Select.Trigger border="none" minW="initial" gap="xs" ps="0" pe="0">
              <Select.ValueText />
              <HStack>
                <Select.Indicator>
                  <Icon />
                </Select.Indicator>
              </HStack>
            </Select.Trigger>
          </Select.Control>

          <Select.Positioner>
            <Select.Content minW="7rem">
              <For each={collection.items}>
                {(item) => <Option key={item.value} item={item} />}
              </For>
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
      </Field>
    </Box>
  )
}
