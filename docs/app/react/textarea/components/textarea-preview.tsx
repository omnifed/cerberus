import { Field, FieldMessage, Label, Textarea } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function TextareaBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field>
        <Label htmlFor="bio">Bio</Label>
        <Textarea describedBy="help:bio" id="bio" />
        <FieldMessage id="help:bio">
          This will be displayed on your public profile.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function TextareaInvalidPreview() {
  return (
    <div className={overrideStyles}>
      <Field required invalid>
        <Label htmlFor="background">Background</Label>
        <Textarea
          describedBy="help:background"
          id="background"
          placeholder="i.e. what is your story?"
        />
        <FieldMessage id="help:background">
          This will be displayed on your public profile.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function TextareaDisabledPreview() {
  return (
    <div className={overrideStyles}>
      <Field disabled>
        <Label htmlFor="message">Your message</Label>
        <Textarea
          describedBy="help:message"
          id="message"
          placeholder="i.e. I am contacting you about..."
        />
        <FieldMessage id="help:message">
          This will be confidential and only visible to our team
          representatives.
        </FieldMessage>
      </Field>
    </div>
  )
}

export function TextareaCustomPreview() {
  return (
    <div className={overrideStyles}>
      <Field required>
        <Label htmlFor="killa_bees">Killa Bees</Label>
        <Textarea
          className={css({
            border: '2px solid',
            borderColor: 'yellow',
            bgColor: 'black',
            color: 'yellow',
          })}
          id="killa_bees"
          placeholder="Protect ya neck!"
        />
      </Field>
    </div>
  )
}
