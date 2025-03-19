import { Show, useContext, type ParentProps } from 'solid-js'
import { ButtonContext } from './context'
import { Box } from 'styled-system/jsx'
import { Spinner } from '../spinner'

/**
 * This module contains the ButtonIcon component.
 * @module
 */

/**
 * An icon to display in a button that utilizes the pending state to display
 * a loading spinner.
 */
export function ButtonIcon(props: ParentProps) {
  const { pending } = useContext(ButtonContext)
  return (
    <Show when={pending} fallback={<>{props.children}</>}>
      <Box w="4">
        <Spinner />
      </Box>
    </Show>
  )
}
