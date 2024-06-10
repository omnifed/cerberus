import { Field, Label } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

export function LabelBasicPreview() {
  return (
    <Field required>
      <Label htmlFor="first_name">First Name</Label>
      <input id="first_name" type="text" />
    </Field>
  )
}

export function LabelHiddenPreview() {
  return (
    <Field required>
      <Label htmlFor="global_search" hidden>
        Search for anything
      </Label>
      <input id="global_search" type="text" />
    </Field>
  )
}

export function LabelOptionalPreview() {
  return (
    <Field>
      <Label htmlFor="preferred">Preferred Name</Label>
      <input id="preferred" type="text" />
    </Field>
  )
}

export function LabelCustomPreview() {
  return (
    <Field required>
      <Label
        className={css({
          fontSize: '2rem',
          bgColor: 'black',
          color: 'yellow',
        })}
        htmlFor="global_search"
      >
        Killa Bees
      </Label>
      <input id="global_search" type="text" />
    </Field>
  )
}
