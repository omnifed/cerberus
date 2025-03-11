import { Admonition, type AdmonitionProps } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { Box } from 'styled-system/jsx'

const cerbAdmonitionStyles = {
  mb: 6,
  rounded: '2xl',
}

interface AdmonitionTypeProps {
  description: string
}

export function NoteAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'page',
    usage: 'outlined',
  } as AdmonitionProps
  return (
    <Box paddingBlock="8">
      <Admonition
        className={css(cerbAdmonitionStyles)}
        {...styles}
        heading="Note"
      >
        {props.description}
      </Admonition>
    </Box>
  )
}

export function DeprecationAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'danger',
  } as AdmonitionProps
  return (
    <Box paddingBlock="8">
      <Admonition
        className={css(cerbAdmonitionStyles)}
        {...styles}
        heading="DEPRECATED"
      >
        This component is deprecated and should not be used. Instead, use{' '}
        {props.description}.
      </Admonition>
    </Box>
  )
}

export function WhenToUseAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'success',
  } as AdmonitionProps
  return (
    <Box paddingBlock="8">
      <Admonition
        className={css(cerbAdmonitionStyles)}
        {...styles}
        heading="When to use"
      >
        {props.description}
      </Admonition>
    </Box>
  )
}

export function WhenNotToUseAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'danger',
  } as AdmonitionProps
  return (
    <Box paddingBlock="8">
      <Admonition
        className={css(cerbAdmonitionStyles)}
        {...styles}
        heading="When not to use"
      >
        {props.description}
      </Admonition>
    </Box>
  )
}
