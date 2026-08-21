'use client'

import { createContext, useContext } from 'react'
import { css, cx } from 'styled-system/css'
import { Box } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { cerberus } from '../../system/index'
import type { CerberusProps } from '../../system/types'
import { Show } from '../show/index'
import { Spinner } from '../spinner/index'
import { ButtonRootProps } from './primitives'

/**
 * This module contains the Button component. For some reason, the Ark-UI Popover
 * will not pass refs to this button API so we have to manually bootstrap the button.
 * @module
 */

interface ButtonContextValue {
  pending: boolean
}

const ButtonContext = createContext<ButtonContextValue>({
  pending: false,
})

export interface ButtonProps extends ButtonRootProps {
  /**
   * If true, the button will show a loading spinner.
   */
  pending?: boolean
}

/**
 * A component that allows the user to perform actions
 * @see https://cerberus.digitalu.design/react/button
 */
function ButtonEl(props: ButtonProps) {
  const [variantProps, elProps] = button.splitVariantProps(props)
  const { pending = false, ...nativeProps } = elProps

  const styles = button(variantProps)
  const value = { pending }

  return (
    <ButtonContext.Provider value={value}>
      <cerberus.button
        data-scope="button"
        data-part="root"
        {...nativeProps}
        disabled={pending || nativeProps.disabled}
        className={cx(elProps.className, styles, css(elProps.css))}
      />
    </ButtonContext.Provider>
  )
}

/**
 * An icon to display in a button that utilizes the pending state to display
 * a loading spinner.
 */
export function ButtonIcon(props: CerberusProps<'div'>) {
  const { children, ref } = props
  const { pending } = useContext(ButtonContext)
  return (
    <Show when={pending} fallback={<>{children}</>}>
      <Box data-scope="button" data-part="button-spinner" ref={ref} w="4">
        <Spinner />
      </Box>
    </Show>
  )
}

// Public API

export function Button(props: ButtonProps) {
  return <ButtonEl {...props} />
}
Button.displayName = 'Button'

Button.Icon = ButtonIcon
ButtonIcon.displayName = 'ButtonIcon'
