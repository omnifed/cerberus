import { cerberus } from '@cerberus-design/react'
import { Avatar } from '@cerberus-design/react/avatar'
import Image from 'next/image'
import Link from 'next/link'

const StyledImg = cerberus(Image, undefined, {
  forwardProps: ['height', 'width'],
})

export function NextDemo() {
  return (
    <Avatar.Root size="lg">
      <Avatar.Fallback asChild>
        <Link href="/">
          <StyledImg
            alt="Protector Cerberus"
            src="https://cerberus.digitalu.design/logo.svg"
            objectFit="cover"
            height={50}
            width={50}
          />
        </Link>
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
