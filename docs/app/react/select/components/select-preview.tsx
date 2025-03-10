'use client'

import {
  For,
  Field,
  Select,
  SelectParts,
  Option,
  OptionGroup,
  OptionGroupLabel,
  createSelectCollection,
  Portal,
} from '@cerberus-design/react'
import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { Box } from '@cerberus-design/styled-system/jsx'
import { ChevronDownOutline } from '@carbon/icons-react'

export function SelectBasicPreview() {
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
    { label: 'Poseidon', value: 'poseidon' },
    { label: 'Hera', value: 'hera' },
  ])

  return (
    <Box w="1/2">
      <Field label="Select Relative">
        <Select collection={collection} placeholder="Choose option">
          <For each={collection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>
    </Box>
  )
}

export function GroupedOptionsDemo() {
  const collection = createSelectCollection([
    { label: 'Hades', value: '1-hades' },
    { label: 'Persephone', value: '1-persephone' },
    { label: 'Zeus', value: '1-zeus', disabled: true },
    { label: 'Poseidon', value: '1-poseidon' },
    { label: 'Hera', value: '1-hera' },
  ])

  return (
    <Box w="1/2">
      <Field label="Select Relative">
        <Select collection={collection} placeholder="Choose option">
          <OptionGroup>
            <OptionGroupLabel>The fam</OptionGroupLabel>
            <For each={collection.items}>
              {(item) => <Option key={item.value} item={item} />}
            </For>
          </OptionGroup>
        </Select>
      </Field>
    </Box>
  )
}

export function SelectCustomPreview() {
  const collection = createSelectCollection([
    { label: 'Hades', value: '1-hades' },
    { label: 'Persephone', value: '1-persephone' },
    { label: 'Zeus', value: '1-zeus', disabled: true },
    { label: 'Poseidon', value: '1-poseidon' },
    { label: 'Hera', value: '1-hera' },
  ])

  return (
    <Box w="1/2">
      <SelectParts.Root collection={collection}>
        <SelectParts.Label
          className={css({
            paddingBlock: 2,
            textStyle: 'body-sm',
            textTransform: 'uppercase',
          })}
        >
          Select a custom relative
        </SelectParts.Label>

        <SelectParts.Control>
          <SelectParts.Trigger
            className={cx(
              css({
                bgColor: 'black',
                color: 'danger.surface.initial',
                paddingInline: 4,
                paddingBlock: 3,
                _hover: {
                  bgColor: 'danger.surface.initial',
                  color: 'white',
                },
              }),
              hstack({
                justify: 'space-between',
                w: 'full',
              }),
            )}
          >
            <SelectParts.ValueText placeholder="Choose a custom option" />
            <SelectParts.Indicator
              className={css({
                transitionProperty: 'transform',
                transitionDuration: 'fast',
                _open: {
                  transform: 'rotate(180deg)',
                },
              })}
            >
              <ChevronDownOutline />
            </SelectParts.Indicator>
          </SelectParts.Trigger>
          <SelectParts.ClearTrigger>Clear</SelectParts.ClearTrigger>
        </SelectParts.Control>

        <Portal>
          <SelectParts.Positioner
            className={css({ w: 'var(--reference-width)' })}
          >
            <SelectParts.Content
              className={css({
                bgColor: 'danger.surface.initial',
                p: 4,
              })}
            >
              <SelectParts.ItemGroup>
                <SelectParts.ItemGroupLabel
                  className={css({
                    fontWeight: 'bold',
                    textStyle: 'label-sm',
                    textTransform: 'uppercase',
                  })}
                >
                  The fam
                </SelectParts.ItemGroupLabel>
                {collection.items.map((item, idx) => (
                  <SelectParts.Item key={item.value} item={item}>
                    <SelectParts.ItemText
                      className={css({
                        color: 'white',
                        display: 'inline-block',
                      })}
                      style={{
                        paddingInlineStart: `calc(16px * ${idx})`,
                      }}
                    >
                      {item.label}
                    </SelectParts.ItemText>
                    <SelectParts.ItemIndicator>✓</SelectParts.ItemIndicator>
                  </SelectParts.Item>
                ))}
              </SelectParts.ItemGroup>
            </SelectParts.Content>
          </SelectParts.Positioner>
        </Portal>
      </SelectParts.Root>
    </Box>
  )
}
