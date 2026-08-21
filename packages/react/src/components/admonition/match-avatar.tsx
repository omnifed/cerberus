'use client'

import { type ElementType } from 'react'
import type { AdmonitionVariantProps } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { Avatar } from '../avatar/avatar'

/**
 * This module provides a component for creating the admonition indicator.
 * @module 'admonition/match-avatar'
 */

interface AvatarRefProps {
  page: ElementType
  info: ElementType
  success: ElementType
  warning: ElementType
  danger: ElementType
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

  const ICON_MAP: AvatarRefProps = {
    page: InfoIcon,
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    danger: DangerIcon,
  }

  const gradient = GRADIENT_MAP[palette]
  const Fallback = ICON_MAP[palette]

  return <Avatar gradient={gradient} fallback={<Fallback />} size="sm" />
}

const GRADIENT_MAP: Record<string, string> = {
  page: 'charon-light',
  info: 'amphiaraus-dark',
  success: 'thanatos-dark',
  warning: 'asphodel-light',
  danger: 'hades-light',
}
