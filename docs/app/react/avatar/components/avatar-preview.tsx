import { Avatar, AvatarRoot } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { HStack } from '@cerberus/styled-system/jsx'
import { WuTangLogo } from '@/app/components/icons/wu-tang-icon'
import Image from 'next/image'

export function AvatarPreview() {
  return (
    <HStack justify="center" w="3/4">
      <Avatar fallback="xs" size="xs" />
      <Avatar fallback="sm" gradient="charon-light" size="sm" />
      <Avatar fallback="md" gradient="charon-dark" size="md" />
      <Avatar fallback="lg" gradient="nyx-light" size="lg" />
      <Avatar fallback="xl" gradient="nyx-dark" size="xl" />
      <Avatar fallback="2x" gradient="amphiaraus-light" size="2xl" />
      <Avatar fallback="3x" gradient="amphiaraus-dark" size="3xl" />
      <Avatar fallback="4x" gradient="hades-dark" size="4xl" />
    </HStack>
  )
}

export function NextAvatar() {
  return (
    <AvatarRoot size="lg" asChild>
      <Image
        alt="Protector Cerberus"
        className={css({
          h: 'full',
          objectFit: 'cover',
          w: 'full',
        })}
        src="https://cerberus.digitalu.design/logo.svg"
        height={100}
        width={100}
      />
    </AvatarRoot>
  )
}

export function CustomAvatar() {
  return (
    <Avatar
      className={css({
        bgColor: 'black',
        bgImage: 'none',
        border: '6px solid',
        borderColor: 'yellow',
        color: 'yellow',
      })}
      height={50}
      size="4xl"
      fallback={
        <span
          className={css({
            display: 'inline-block',
            w: '1/3',
          })}
        >
          <WuTangLogo />
        </span>
      }
      width={50}
    />
  )
}
