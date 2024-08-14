import { cx } from '@cerberus/styled-system/css'
import { circle } from '@cerberus/styled-system/patterns'
import {
  modalIcon,
  type ModalIconVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export type ModalIconBaseProps = HTMLAttributes<HTMLDivElement>
export type ModalIconProps = ModalIconBaseProps & ModalIconVariantProps

export function ModalIcon(props: PropsWithChildren<ModalIconProps>) {
  const { palette, ...nativeProps } = props
  return (
    <div
      {...nativeProps}
      className={cx(
        nativeProps.className,
        modalIcon({
          palette,
        }),
        circle(),
      )}
    >
      {props.children}
    </div>
  )
}
