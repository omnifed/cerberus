import { WarningFilled } from '@cerberus-design/icons'
import { Field, FieldMessage, Label } from '@cerberus-design/react'
import { input } from '@cerberus-design/styled-system/recipes'
import { css, cx } from '@cerberus/styled-system/css'
import type { InputHTMLAttributes } from 'react'

const inputStyles = input()
const overrideStyles = css({
  w: '1/2',
})

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={inputStyles.root}>
      <input
        {...props}
        className={cx('peer', props.className, inputStyles.input)}
      />
    </div>
  )
}

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
          aria-describedby="help:preferred"
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

export function InputDisabledPreview() {
  return (
    <div className={overrideStyles}>
      <Field disabled>
        <Label htmlFor="preferred">Preferred Name</Label>
        <Input
          aria-describedby="help:preferred"
          disabled
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
