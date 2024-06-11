import { Field, Label } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { Input } from '../../input/components/input-preview'

const overrideStyles = css({
  w: '1/2',
})

export function LabelBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" type="text" />
      </Field>
    </div>
  )
}

export function LabelHiddenPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="global_search" hidden>
          Search for anything
        </Label>
        <Input id="global_search" type="text" />
      </Field>
    </div>
  )
}

export function LabelOptionalPreview() {
  return (
    <div className={overrideStyles}>
      <Field>
        <Label htmlFor="preferred">Preferred Name</Label>
        <Input id="preferred" type="text" />
      </Field>
    </div>
  )
}

export function LabelCustomPreview() {
  return (
    <div className={overrideStyles}>
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
        <Input id="global_search" type="text" />
      </Field>
    </div>
  )
}
