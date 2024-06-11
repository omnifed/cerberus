import { Field, FieldMessage, Label, Input } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'

const overrideStyles = css({
  w: '1/2',
})

export function InputBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field>
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" type="text" />
      </Field>
    </div>
  )
}

export function InputInvalidPreview() {
  return (
    <div className={overrideStyles}>
      <Field required invalid>
        <Label htmlFor="preferred">Preferred Name</Label>
        <Input
          describedBy="help:preferred"
          id="preferred"
          type="text"
          placeholder="i.e. Bobby"
        />
        <FieldMessage id="help:preferred">
          A preferred name is required to create an account.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function InputDisabledPreview() {
  return (
    <div className={overrideStyles}>
      <Field disabled>
        <Label htmlFor="preferred">Preferred Name</Label>
        <Input
          describedBy="help:preferred"
          id="preferred"
          type="text"
          placeholder="i.e. Bobby"
        />
        <FieldMessage id="help:preferred">
          This will be the name we use to address you.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function InputSizesPreview() {
  return (
    <div
      className={vstack({
        alignItems: 'flex-start',
      })}
    >
      <div>
        <Field>
          <Label htmlFor="first_name">First Name</Label>
          <Input id="first_name" type="text" size="sm" />
        </Field>
      </div>
      <div>
        <Field>
          <Label htmlFor="last_name">Last Name</Label>
          <Input id="last_name" type="text" size="md" />
        </Field>
      </div>
      <div>
        <Field>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" size="lg" />
        </Field>
      </div>
    </div>
  )
}

export function InputCustomPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="global_search">Killa Bees</Label>
        <Input
          className={css({
            border: '2px solid',
            borderColor: 'yellow',
            bgColor: 'black',
            color: 'yellow',
          })}
          id="global_search"
          placeholder="Enter the Wu-Tang Clan here."
          type="text"
        />
      </Field>
    </div>
  )
}
