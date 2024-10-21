'use client'

import {
  Field,
  FieldMessage,
  Label,
  Toggle,
  useToggle,
} from '@cerberus-design/react'
import { hstack, vstack } from '@cerberus/styled-system/patterns'

export function DefaultTogglePreview() {
  const { checked, handleChange } = useToggle({ checked: 'default' })
  return (
    <Field>
      <Toggle
        checked={checked === 'default'}
        id="default"
        onChange={handleChange}
        value="default"
      />
    </Field>
  )
}

export function DisabledTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Field disabled>
      <Toggle
        checked={checked === 'default'}
        id="default"
        onChange={handleChange}
        value="default"
      />
    </Field>
  )
}

export function WithMessageTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Field>
      <div
        className={vstack({
          alignItems: 'flex-start',
        })}
      >
        <Label htmlFor="default">User Settings</Label>
        <div className={hstack()}>
          <Toggle
            describedBy="help:default"
            checked={checked === 'default'}
            id="default"
            onChange={handleChange}
            value="default"
          />
          <FieldMessage id="help:default">Show notifications</FieldMessage>
        </div>
      </div>
    </Field>
  )
}

export function WithLabelTogglePreview() {
  const { checked, handleChange } = useToggle()
  return (
    <Field>
      <div className={hstack()}>
        <Toggle
          describedBy="help:default"
          checked={checked === 'default'}
          id="default"
          onChange={handleChange}
          value="default"
        />
        <Label htmlFor="default">Show notifications</Label>
      </div>
    </Field>
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
      <Field>
        <Label htmlFor="lg-one" aria-label="Large toggle">
          <Toggle
            checked={checked === 'lg-one'}
            id="lg-one"
            size="lg"
            onChange={handleChange}
            value="lg-one"
          />
        </Label>
      </Field>
      <Field>
        <Label htmlFor="lg-two" aria-label="Checked large toggle">
          <Toggle
            checked={checked === 'lg-two'}
            id="lg-two"
            size="lg"
            onChange={handleChange}
            value="lg-two"
          />
        </Label>
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
