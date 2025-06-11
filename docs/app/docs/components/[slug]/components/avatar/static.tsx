import { Avatar, AvatarRoot } from '@cerberus-design/react'
import { css } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'
import Image from 'next/image'
import Link from 'next/link'

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
      <Link href="/">
        <Image
          alt="Protector Cerberus"
          className={css({
            objectFit: 'cover',
          })}
          src="https://cerberus.digitalu.design/logo.svg"
          height={50}
          width={50}
        />
      </Link>
    </AvatarRoot>
  )
}

export function CustomAvatar() {
  return (
    <Avatar
      css={{
        bgColor: 'black',
        bgImage: 'none',
        border: '6px solid',
        borderColor: 'danger.border.initial',
        color: 'danger.text.initial',
        fontFamily: 'sans',
        transform: 'skewX(-10deg)',
      }}
      size="4xl"
      fallback="Cu"
    />
  )
}
