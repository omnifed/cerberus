import { fieldMessage } from '@cerberus-design/styled-system/recipes'
import { Field, Label } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import type { HTMLAttributes, InputHTMLAttributes } from 'react'

const overrideStyles = css({
  w: '1/2',
})

// Temp Input
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={css({
        border: '1px solid',
        borderColor: 'neutral.border.100',
        mt: '1',
        p: '2',
        rounded: 'md',
        w: 'full',
      })}
    />
  )
}

// temp fieldMessage
function FieldMessage(props: HTMLAttributes<HTMLParagraphElement>) {
  return <small {...props} className={cx(props.className, fieldMessage())} />
}

export function FieldMessageBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" type="text" />
        <FieldMessage>
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
        <Input id="first_name" type="text" placeholder="Your first name" />
        <FieldMessage aria-invalid>
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
        <Input id="global_search" type="text" />
        <FieldMessage
          className={css({
            bgColor: 'black',
            color: 'yellow',
            p: '2',
          })}
        >
          Wu-Tang Clan ain&apos;t nothing to mess with!
        </FieldMessage>
      </Field>
    </div>
  )
}
