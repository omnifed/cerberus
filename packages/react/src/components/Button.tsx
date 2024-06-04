import type { ButtonHTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import { button } from '@cerberus/styled-system/recipes'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette?: 'action' | 'danger'
  usage?: 'filled' | 'outline' | 'text'
  shape?: 'sharp' | 'rounded'
}

/**
 * A component that allows the user to perform actions
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/Button.tsx
 */
export function Button(props: ButtonProps): JSX.Element {
  const { palette, usage, shape, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      className={cx(
        nativeProps.className,
        button({
          palette,
          usage,
          shape,
        }),
      )}
    />
  )
}
