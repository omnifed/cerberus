'use client'

import { Field, Toggle, useToggle } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'
import { Box } from '@cerberus-design/styled-system/jsx'

export function DefaultTogglePreview() {
  const { checked, handleChange } = useToggle({ checked: 'default' })
  return (
    <Box w="1/2">
      <Field>
        <Toggle
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
      </Field>
    </Box>
  )
}

export function DisabledTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Box w="1/2">
      <Field disabled>
        <Toggle
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
      </Field>
    </Box>
  )
}

export function WithMessageTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Box w="1/2">
      <Field
        ids={{
          control: 'default',
        }}
        label="User Settings"
        helperText="Show notifications"
      >
        <Toggle
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
      </Field>
    </Box>
  )
}

export function WithLabelTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Box w="1/2">
      <Field
        ids={{
          control: 'default',
        }}
        label="User Settings"
      >
        <Toggle
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
      </Field>
    </Box>
  )
}

export function OverviewToggleGroup() {
  const { checked, handleChange } = useToggle({ checked: 'lg-one' })
  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      <Field
        ids={{
          control: 'lg-one',
        }}
        label="Large Toggle"
      >
        <Toggle
          checked={checked === 'lg-one'}
          id="lg-one"
          size="lg"
          onChange={handleChange}
          value="lg-one"
        />
      </Field>
      <Field
        ids={{
          control: 'lg-two',
        }}
        label="Checked Large Toggle"
      >
        <Toggle
          checked={checked === 'lg-two'}
          id="lg-two"
          size="lg"
          onChange={handleChange}
          value="lg-two"
        />
      </Field>
    </div>
  )
}

export function OverviewToggleSizes() {
  const { checked, handleChange } = useToggle({ checked: 'lg-t' })

  return (
    <div
      className={hstack({
        gap: 4,
        w: '1/2',
      })}
    >
      <Field>
        <Toggle
          checked={checked === 'sm-t'}
          id="sm-t"
          onChange={handleChange}
          value="sm-t"
        />
      </Field>
      <Field>
        <Toggle
          checked={checked === 'lg-t'}
          id="lg-t"
          onChange={handleChange}
          size="lg"
          value="lg-t"
        />
      </Field>
    </div>
  )
}
