'use client'

import { useMemo } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { splitProps } from '../../utils'
import { Menu } from '../menu/index'
import { ButtonEl, type ButtonProps } from './button'
import { ButtonIcon } from './icon'
import { IconButton, type IconButtonProps } from './icon-button'
import { ButtonGroup } from './primitives'

/**
 * This module provides an abstraction for a SplitButton component.
 * @module SplitButton
 */

export interface SplitButtonProps extends Omit<ButtonProps, 'size'> {
  /**
   * The text for the primary action button.
   */
  actionText: string
  /**
   * The size of the SplitButton.
   */
  size?: IconButtonProps['size']
}

/**
 * A SplitButton component that combines a primary action button with a
 * dropdown menu for additional actions.
 * The action button is a `<Button>`, so `pending` disables it and swaps its
 * `Button.Icon` for a Spinner.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/docs/components/split-button)
 */
export function ButtonSplitButton(props: SplitButtonProps) {
  const [elProps, { usage = 'filled', actionText }, actionProps] = splitProps(
    props,
    ['children'],
    ['usage', 'actionText'],
  )

  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow } = icons

  const iconShape = useMemo(() => {
    return actionProps.shape === 'rounded' ? 'circle' : 'square'
  }, [actionProps.shape])

  // The group recipe only has `sharp`, `rounded` and `default` (the other
  // button shapes)
  const groupShape =
    actionProps.shape === 'rounded' || actionProps.shape === 'sharp'
      ? actionProps.shape
      : 'default'

  return (
    <ButtonGroup layout="attached" shape={groupShape}>
      <ButtonEl {...actionProps} size={props.size} usage={usage}>
        <ButtonIcon />
        {actionText}
      </ButtonEl>

      <Menu>
        <Menu.Trigger asChild>
          <IconButton
            ariaLabel="More options"
            palette={actionProps.palette}
            disabled={actionProps.pending}
            shape={iconShape}
            size={props.size}
            usage={usage}
          >
            <SelectArrow />
          </IconButton>
        </Menu.Trigger>

        <Menu.ContentGroup>{elProps.children}</Menu.ContentGroup>
      </Menu>
    </ButtonGroup>
  )
}

/**
 * A primary action button with a dropdown menu of other actions; an alias of
 * `Button.SplitButton`.
 * @see {@link ButtonSplitButton}
 */
export const SplitButton = ButtonSplitButton
