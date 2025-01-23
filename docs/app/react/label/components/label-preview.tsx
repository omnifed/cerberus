import { FieldRoot, FieldInput, FieldLabel } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function LabelBasicPreview() {
  return (
    <div className={overrideStyles}>
      <FieldRoot
        ids={{
          control: 'first_name',
        }}
        required
      >
        <FieldLabel>First Name</FieldLabel>
        <FieldInput placeholder="Type your first name" type="text" />
      </FieldRoot>
    </div>
  )
}

export function LabelHiddenPreview() {
  return (
    <div className={overrideStyles}>
      <FieldRoot
        ids={{
          control: 'global_search_1',
        }}
        required
      >
        <FieldLabel hidden>Search anything</FieldLabel>
        <FieldInput placeholder="Search anything" type="text" />
      </FieldRoot>
    </div>
  )
}

export function LabelOptionalPreview() {
  return (
    <div className={overrideStyles}>
      <FieldRoot
        ids={{
          control: 'preferred',
        }}
      >
        <FieldLabel>Preferred Name</FieldLabel>
        <FieldInput placeholder="i.e. Johnny" type="text" />
      </FieldRoot>
    </div>
  )
}

export function LabelCustomPreview() {
  return (
    <div className={overrideStyles}>
      <FieldRoot
        ids={{
          control: 'global_search',
        }}
        required
      >
        <FieldLabel
          className={css({
            fontSize: '2rem',
            bgColor: 'black',
            color: 'yellow',
          })}
        >
          Killa Bees
        </FieldLabel>
        <FieldInput type="text" />
      </FieldRoot>
    </div>
  )
}
