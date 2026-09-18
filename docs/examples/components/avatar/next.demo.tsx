import { css } from '@/styled-system/css'
import { AvatarRoot } from '@cerberus-design/react'
import Image from 'next/image'
import Link from 'next/link'

export function NextDemo() {
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
