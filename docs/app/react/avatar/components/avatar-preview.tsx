import { Avatar } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { WuTangLogo } from '@/app/components/icons/wu-tang-icon'
import Image from 'next/image'

export function AvatarPreview() {
  return (
    <div
      className={hstack({
        justify: 'center',
        w: '3/4',
      })}
    >
      <Avatar ariaLabel="x s" size="xs" src="" />
      <Avatar ariaLabel="s m" gradient="charon-light" size="sm" src="" />
      <Avatar ariaLabel="m d" gradient="charon-dark" size="md" src="" />
      <Avatar ariaLabel="l g" gradient="nyx-light" size="lg" src="" />
      <Avatar ariaLabel="x l" gradient="nyx-dark" size="xl" src="" />
      <Avatar ariaLabel="2 x" gradient="amphiaraus-light" size="2xl" src="" />
      <Avatar ariaLabel="3 x" gradient="amphiaraus-dark" size="3xl" src="" />
      <Avatar ariaLabel="4 x" gradient="hades-dark" size="4xl" src="" />
    </div>
  )
}

export function NextAvatar() {
  return (
    <Avatar
      as={
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
      }
      size="lg"
    />
  )
}

export function CustomAvatar() {
  return (
    <Avatar
      ariaLabel=""
      className={css({
        bgColor: 'black',
        bgImage: 'none',
        border: '6px solid',
        borderColor: 'yellow',
        color: 'yellow',
      })}
      height={50}
      size="4xl"
      src=""
      icon={
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
