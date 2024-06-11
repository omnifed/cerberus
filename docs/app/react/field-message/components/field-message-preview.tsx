import { Field, FieldMessage, Input, Label } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function FieldMessageBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="first_name">First Name</Label>
        <Input aria-describedby="help:first_name" id="first_name" type="text" />
        <FieldMessage id="help:first_name">
          This will only be used in your account information.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function FieldMessageInvalidPreview() {
  return (
    <div className={overrideStyles}>
      <Field invalid>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          aria-describedby="help:first_name"
          id="first_name"
          type="text"
          placeholder="Your first name"
        />
        <FieldMessage id="help:first_name">
          A first name is required to create an account.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function FieldMessageCustomPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="global_search">Killa Bees</Label>
        <Input aria-describedby="help:search" id="global_search" type="text" />
        <FieldMessage
          className={css({
            bgColor: 'black',
            color: 'yellow',
            p: '2',
          })}
          id="help:search"
        >
          Wu-Tang Clan ain&apos;t nothing to mess with!
        </FieldMessage>
      </Field>
    </div>
  )
}
