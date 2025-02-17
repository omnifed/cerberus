'use client'

import type { AdmonitionVariantProps } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Avatar } from '../Avatar'
import { useRef, type ReactNode } from 'react'

/**
 * This module provides a component for creating the admonition indicator.
 * @module 'admonition/match-avatar'
 */

interface AvatarRefProps {
  page: ReactNode
  info: ReactNode
  success: ReactNode
  warning: ReactNode
  danger: ReactNode
}

type MatchAvatarProps = AdmonitionVariantProps

export function MatchAvatar(props: MatchAvatarProps) {
  const { palette = 'page' } = props

  const { icons } = useCerberusContext()
  const {
    infoNotification: InfoIcon,
    successNotification: SuccessIcon,
    warningNotification: WarningIcon,
    dangerNotification: DangerIcon,
  } = icons

  // cache the el since the result is static and the component is client side
  const elRef = useRef<AvatarRefProps>({
    page: (
      <Avatar
        gradient="charon-light"
        ariaLabel=""
        icon={<InfoIcon />}
        size="sm"
        src=""
      />
    ),
    info: (
      <Avatar
        gradient="amphiaraus-dark"
        ariaLabel=""
        icon={<InfoIcon />}
        size="sm"
        src=""
      />
    ),
    success: (
      <Avatar
        gradient="thanatos-dark"
        ariaLabel=""
        icon={<SuccessIcon />}
        size="sm"
        src=""
      />
    ),
    warning: (
      <Avatar
        gradient="asphodel-light"
        ariaLabel=""
        icon={<WarningIcon />}
        size="sm"
        src=""
      />
    ),
    danger: (
      <Avatar
        gradient="hades-light"
        ariaLabel=""
        icon={<DangerIcon />}
        size="sm"
        src=""
      />
    ),
  })

  return <>{elRef.current[palette]}</>
}
