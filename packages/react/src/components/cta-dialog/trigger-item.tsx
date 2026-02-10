import { ark } from '@ark-ui/react/factory'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { CerberusProps } from '../../system/types'
import { Button, type ButtonProps } from '../button/button'

/**
 * This module provides the trigger item for the cta modal.
 * @module 'react/cta-modal/trigger-item'
 */

export interface TriggerItemProps extends ButtonProps {
  asChild?: boolean
}

/**
 * Trigger item for the cta modal which renders content based on the actions.
 * type.
 */
export function TriggerItem(props: CerberusProps<'button'> & TriggerItemProps) {
  const { asChild, children, ...buttonProps } = props

  if (asChild) {
    return (
      <ark.div
        className={cx(
          button({
            shape: 'rounded',
            usage: 'ghost',
          }),
          css({
            w: '1/2',
          }),
        )}
        asChild
      >
        {children}
      </ark.div>
    )
  }

  return (
    <Button
      {...buttonProps}
      className={css({
        w: '1/2',
      })}
      shape="rounded"
      usage="outlined"
    >
      {children}
    </Button>
  )
}
