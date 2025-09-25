'use client'

import type { PropsWithChildren } from 'react'
import { Button, ButtonGroup } from '../button/index'
import { IconButton } from '../icon-button/index'
import { Menu, MenuTrigger, MenuContent } from '../menu/index'

/**
 * This module provides an abstraction for a SplitButton component.
 * @module SplitButton
 */

export interface SplitButtonProps {
  something?: boolean
}

/**
 * A SplitButton component that combines a primary action button with a
 * dropdown menu for additional actions.
 * @definition [Cerberus docs](https://cerberus.digitalu.designdocs/components/split-button)
 */
export function SplitButton(props: PropsWithChildren<SplitButtonProps>) {
  return (
    <ButtonGroup layout="attached">
      <Button>ACTION</Button>
      <Menu>
        <MenuTrigger>
          <IconButton ariaLabel="More options">X</IconButton>
        </MenuTrigger>
        <MenuContent>{props.children}</MenuContent>
      </Menu>
    </ButtonGroup>
  )
}
