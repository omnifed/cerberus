'use client'

import { label } from '@cerberus/styled-system/recipes'
import { Field } from '@cerberus-design/react'

export function LabelBasicPreview() {
  return (
    <Field>
      <label className={label()} htmlFor="first_name">
        First Name
        <input name="first_name" type="text" />
      </label>
    </Field>
  )
}

export function LabelHiddenPreview() {
  return (
    <Field>
      <label
        className={label({
          usage: 'hidden',
        })}
        htmlFor="global_search"
      >
        Search for anything
        <input name="global_search" type="text" />
      </label>
    </Field>
  )
}
