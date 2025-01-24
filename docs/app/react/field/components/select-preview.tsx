'use client'

import {
  Select,
  Option,
  createSelectCollection,
  Portal,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectClearTrigger,
} from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
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
      <Select
        collection={collection}
        label="Select Relative"
        placeholder="Choose option"
      >
        {collection.items.map((item) => (
          <Option key={item.value} item={item} />
        ))}
      </Select>
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
      <SelectRoot collection={collection}>
        <SelectLabel
          className={css({
            paddingBlock: 2,
            textStyle: 'body-sm',
            textTransform: 'uppercase',
          })}
        >
          Select a custom relative
        </SelectLabel>

        <SelectControl>
          <SelectTrigger
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
            <SelectValueText placeholder="Choose a custom option" />
            <SelectIndicator
              className={css({
                transitionProperty: 'transform',
                transitionDuration: 'fast',
                _open: {
                  transform: 'rotate(180deg)',
                },
              })}
            >
              <ChevronDownOutline />
            </SelectIndicator>
          </SelectTrigger>
          <SelectClearTrigger>Clear</SelectClearTrigger>
        </SelectControl>

        <Portal>
          <SelectPositioner className={css({ w: 'var(--reference-width)' })}>
            <SelectContent
              className={css({
                bgColor: 'danger.surface.initial',
                p: 4,
              })}
            >
              <SelectItemGroup>
                <SelectItemGroupLabel
                  className={css({
                    fontWeight: 'bold',
                    textStyle: 'label-sm',
                    textTransform: 'uppercase',
                  })}
                >
                  The fam
                </SelectItemGroupLabel>
                {collection.items.map((item, idx) => (
                  <SelectItem key={item.value} item={item}>
                    <SelectItemText
                      className={css({
                        color: 'white',
                        display: 'inline-block',
                      })}
                      style={{
                        paddingInlineStart: `calc(16px * ${idx})`,
                      }}
                    >
                      {item.label}
                    </SelectItemText>
                    <SelectItemIndicator>✓</SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectItemGroup>
            </SelectContent>
          </SelectPositioner>
        </Portal>
      </SelectRoot>
    </Box>
  )
}
