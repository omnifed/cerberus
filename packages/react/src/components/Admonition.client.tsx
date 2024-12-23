'use client'

import type { AdmonitionVariantProps } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../context/cerberus'
import { Avatar } from './Avatar'

type MatchAvatarProps = AdmonitionVariantProps

export function MatchAvatar(props: MatchAvatarProps) {
  const { icons } = useCerberusContext()
  const {
    infoNotification: InfoIcon,
    successNotification: SuccessIcon,
    warningNotification: WarningIcon,
    dangerNotification: DangerIcon,
  } = icons

  switch (props.palette) {
    case 'page':
      return (
        <Avatar
          gradient="charon-light"
          ariaLabel=""
          icon={<InfoIcon />}
          size="sm"
          src=""
        />
      )
    case 'info':
      return (
        <Avatar
          gradient="amphiaraus-dark"
          ariaLabel=""
          icon={<InfoIcon />}
          size="sm"
          src=""
        />
      )
    case 'success':
      return (
        <Avatar
          gradient="thanatos-dark"
          ariaLabel=""
          icon={<SuccessIcon />}
          size="sm"
          src=""
        />
      )
    case 'warning':
      return (
        <Avatar
          gradient="asphodel-light"
          ariaLabel=""
          icon={<WarningIcon />}
          size="sm"
          src=""
        />
      )
    case 'danger':
      return (
        <Avatar
          gradient="hades-light"
          ariaLabel=""
          icon={<DangerIcon />}
          size="sm"
          src=""
        />
      )

    default:
      throw new Error('Unsupported admonition palette')
  }
}
