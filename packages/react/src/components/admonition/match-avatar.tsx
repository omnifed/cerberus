'use client'

import type { AdmonitionVariantProps } from 'styled-system/recipes'
import { useRef, type ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { Avatar } from '../avatar/avatar'

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
    page: <Avatar gradient="charon-light" fallback={<InfoIcon />} size="sm" />,
    info: (
      <Avatar gradient="amphiaraus-dark" fallback={<InfoIcon />} size="sm" />
    ),
    success: (
      <Avatar gradient="thanatos-dark" fallback={<SuccessIcon />} size="sm" />
    ),
    warning: (
      <Avatar gradient="asphodel-light" fallback={<WarningIcon />} size="sm" />
    ),
    danger: (
      <Avatar gradient="hades-light" fallback={<DangerIcon />} size="sm" />
    ),
  })

  return <>{elRef.current[palette]}</>
}
