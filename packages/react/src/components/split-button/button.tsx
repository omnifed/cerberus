'use client'

import { useCerberusContext } from '../../context/cerberus'
import { splitProps } from '../../utils'
import { Button, ButtonGroup, type ButtonProps } from '../button/index'
import { IconButton } from '../icon-button/index'
import { Menu, MenuTrigger, MenuContent } from '../menu/index'
import type { CerberusPrimitiveProps } from '../../system/types'

/**
 * This module provides an abstraction for a SplitButton component.
 * @module SplitButton
 */

export interface SplitButtonProps extends ButtonProps {
  actionText: string
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

  const iconShape = actionProps.shape === 'rounded' ? 'circle' : 'square'

  return (
    <ButtonGroup layout="attached" shape={actionProps.shape}>
      <Button usage={usage} {...actionProps}>
        {actionText}
      </Button>

      <Menu>
        <MenuTrigger>
          <IconButton
            ariaLabel="More options"
            palette={actionProps.palette}
            shape={iconShape}
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
