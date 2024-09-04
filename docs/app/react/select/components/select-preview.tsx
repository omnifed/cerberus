import { ChevronDown, ErrorFilled } from '@cerberus-design/icons'
import { Field, FieldMessage, Label } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { select } from '@cerberus/styled-system/recipes'
import type { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

const overrideStyles = css({
  w: '1/2',
})

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  const styles = select()
  return (
    <div className={styles.root}>
      <select {...props} aria-invalid="true" className={styles.input} />
      <span
        className={cx(
          styles.iconStack,
          hstack({
            gap: '2',
          }),
        )}
      >
        <span data-invalid className={styles.stateIcon}>
          <ErrorFilled />
        </span>
        <span>
          <ChevronDown />
        </span>
      </span>
    </div>
  )
}

function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />
}

export function SelectBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field>
        <Label htmlFor="fruit">Select Fruit</Label>
        <Select aria-describedby="help:fruit" id="fruit">
          <Option value="">Choose option</Option>
          <Option value="one">Option 1</Option>
          <Option value="two">Option 2</Option>
          <Option value="three">Option 3</Option>
        </Select>
        <FieldMessage id="help:fruit">
          This will be your included in your smoothie.
        </FieldMessage>
      </Field>
    </div>
  )
}
