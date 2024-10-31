import { Information } from '@cerberus-design/icons'
import { Avatar, Tag } from '@cerberus-design/react'
import { HStack, VStack } from '@cerberus-design/styled-system/jsx'
import { cx } from '@cerberus/styled-system/css'
import {
  admonition,
  type AdmonitionVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HTMLAttributes } from 'react'

type MatchAvatarProps = AdmonitionVariantProps

function MatchAvatar(props: MatchAvatarProps) {
  switch (props.palette) {
    case 'page':
      return (
        <Avatar
          gradient="charon-light"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )
    case 'info':
      return (
        <Avatar
          gradient="amphiaraus-dark"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )
    case 'success':
      return (
        <Avatar
          gradient="thanatos-dark"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )
    case 'warning':
      return (
        <Avatar
          gradient="asphodel-light"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )
    case 'danger':
      return (
        <Avatar
          gradient="hades-light"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )

    default:
      return (
        <Avatar
          gradient="charon-light"
          ariaLabel=""
          icon={<Information />}
          size="sm"
          src=""
        />
      )
  }
}

export type AdmonitionProps = HTMLAttributes<HTMLDivElement> &
  AdmonitionVariantProps

export function Admonition(props: AdmonitionProps) {
  const { children, palette = 'page', usage, ...nativeProps } = props
  return (
    <HStack
      {...nativeProps}
      className={cx(nativeProps.className, admonition({ palette, usage }).root)}
      gap="md"
      w="full"
    >
      <MatchAvatar palette={palette} />
      <div>{children}</div>
    </HStack>
  )
}

type AdmonitionHeadingProps = HTMLAttributes<HTMLParagraphElement> &
  AdmonitionVariantProps

export function AdmonitionHeading(props: AdmonitionHeadingProps) {
  const { palette, usage, ...nativeProps } = props
  return (
    <p
      {...nativeProps}
      className={cx(
        nativeProps.className,
        admonition({ palette, usage }).heading,
      )}
    />
  )
}

type AdmonitionDescriptionProps = HTMLAttributes<HTMLParagraphElement> &
  AdmonitionVariantProps

export function AdmonitionDescription(props: AdmonitionDescriptionProps) {
  const { palette, usage, ...nativeProps } = props
  return (
    <p
      {...nativeProps}
      className={cx(
        nativeProps.className,
        admonition({ palette, usage }).description,
      )}
    />
  )
}

function PageAdmonition() {
  const styleProps = {
    palette: 'page',
    usage: 'filled',
  } as AdmonitionProps
  return (
    <Admonition {...styleProps}>
      <AdmonitionHeading {...styleProps}>When to use</AdmonitionHeading>
      <AdmonitionDescription {...styleProps}>
        Use this component when you want to display a page-level message.
      </AdmonitionDescription>
    </Admonition>
  )
}

function OutlinedPageAdmonition() {
  const styleProps = {
    palette: 'page',
    usage: 'outlined',
  } as AdmonitionProps
  return (
    <Admonition {...styleProps}>
      <AdmonitionHeading {...styleProps}>When to use</AdmonitionHeading>
      <AdmonitionDescription {...styleProps}>
        Use this component when you want to display a page-level message.
      </AdmonitionDescription>
    </Admonition>
  )
}

export function OverviewVersions() {
  return (
    <VStack gap="lg">
      <VStack>
        <PageAdmonition />
        <Tag>Filled</Tag>
      </VStack>
      <VStack>
        <OutlinedPageAdmonition />
        <Tag>Outlined</Tag>
      </VStack>
    </VStack>
  )
}
