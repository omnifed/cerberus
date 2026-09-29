'use client'

import { useCerberusContext } from '../../context/cerberus'
import { splitProps } from '../../utils'
import { ButtonGroup, ButtonParts, type ButtonProps } from '../button/index'
import { IconButton, IconButtonProps } from '../icon-button/index'
import { Menu, MenuTrigger, MenuContent } from '../menu/index'
import type { CerberusPrimitiveProps } from '../../system/types'
import { useMemo } from 'react'

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
 * @definition [Cerberus docs](https://cerberus.digitalu.designdocs/components/split-button)
 */
export function SplitButton(props: CerberusPrimitiveProps<SplitButtonProps>) {
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

  return (
    <ButtonGroup layout="attached" shape={actionProps.shape}>
      <ButtonParts.Root {...actionProps} size={props.size} usage={usage}>
        <ButtonParts.Icon />
        {actionText}
      </ButtonParts.Root>

      <Menu>
        <MenuTrigger>
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
        </MenuTrigger>

        <MenuContent>{elProps.children}</MenuContent>
      </Menu>
    </ButtonGroup>
  )
}
