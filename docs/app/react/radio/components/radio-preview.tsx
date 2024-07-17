import { focusStates } from '@cerberus-design/panda-preset'
import { Field, Label } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { radio } from '@cerberus/styled-system/recipes'
import { type InputHTMLAttributes, type PropsWithChildren } from 'react'

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string
  size?: 'sm' | 'md'
}

export function Radio(props: PropsWithChildren<RadioProps>) {
  const { children, size, ...nativeProps } = props
  const styles = radio({
    size,
  })
  return (
    <Field>
      <div className={cx('group', hstack(), styles.root)} tabIndex={0}>
        <input
          {...nativeProps}
          className={styles.input}
          tabIndex={-1}
          type="radio"
        />
        <Label className={styles.label} htmlFor={props.id}>
          {children}
        </Label>
      </div>
    </Field>
  )
}

export function OverviewRadioGroup() {
  return (
    <fieldset
      className={hstack({
        gap: '4',
        p: '4',
        rounded: 'xl',
      })}
      name="pet"
      role="radiogroup"
    >
      <Radio id="pet" name="pet" value="dog" defaultChecked>
        🐶 Dog
      </Radio>
      <Radio id="pet" name="pet" value="cat">
        🐱 Cat
      </Radio>
      <Radio id="pet" name="pet" value="mouse">
        🐭 Mouse
      </Radio>
    </fieldset>
  )
}

export function OverviewRadioSizes() {
  return (
    <fieldset
      className={hstack({
        gap: '4',
        p: '4',
        rounded: 'xl',
      })}
      name="sizes"
      role="radiogroup"
    >
      <Radio id="sizes" name="sizes" value="sm" size="sm">
        Small
      </Radio>
      <Radio id="sizes" name="sizes" value="md">
        Medium (default)
      </Radio>
    </fieldset>
  )
}
