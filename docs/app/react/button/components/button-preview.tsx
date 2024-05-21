import { Button } from '@cerberus-design/react'
import { ArrowDownRight } from '@cerberus-design/icons'
import { css } from '@/styled-system/css'

export function BasicButtonPreview() {
  return <Button>Default styles</Button>
}

export function DangerButtonPreview() {
  return <Button palette="danger">Danger styles</Button>
}

export function OutlineButtonPreview() {
  return <Button usage="outline">Outline styles</Button>
}

export function TextButtonPreview() {
  return <Button usage="text">Text styles</Button>
}

export function RoundedButtonPreview() {
  return <Button shape="rounded">Rounded styles</Button>
}

export function WithIconButtonPreview() {
  return (
    <Button>
      <ArrowDownRight />
      With icon
    </Button>
  )
}

export function CustomButtonPreview() {
  return (
    <Button
      className={css({
        bgColor: 'yellow',
        color: 'black',
        _hover: {
          bgColor: 'black',
          color: 'yellow',
        },
      })}
    >
      Wu-Tang Forever
    </Button>
  )
}
