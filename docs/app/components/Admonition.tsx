import {
  Admonition,
  AdmonitionDescription,
  AdmonitionHeading,
  type AdmonitionProps,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'

const cerbAdmonitionStyles = {
  rounded: 'lg',
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
    <Admonition className={css(cerbAdmonitionStyles)} {...styles}>
      <AdmonitionHeading {...styles}>Note</AdmonitionHeading>
      <AdmonitionDescription {...styles}>
        {props.description}
      </AdmonitionDescription>
    </Admonition>
  )
}

export function WhenToUseAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'success',
  } as AdmonitionProps
  return (
    <Admonition className={css(cerbAdmonitionStyles)} {...styles}>
      <AdmonitionHeading {...styles}>When to use</AdmonitionHeading>
      <AdmonitionDescription {...styles}>
        {props.description}
      </AdmonitionDescription>
    </Admonition>
  )
}

export function WhenNotToUseAdmonition(props: AdmonitionTypeProps) {
  const styles = {
    palette: 'danger',
  } as AdmonitionProps
  return (
    <Admonition className={css(cerbAdmonitionStyles)} {...styles}>
      <AdmonitionHeading {...styles}>When not to use</AdmonitionHeading>
      <AdmonitionDescription {...styles}>
        {props.description}
      </AdmonitionDescription>
    </Admonition>
  )
}
