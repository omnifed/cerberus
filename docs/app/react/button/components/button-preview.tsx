import { css, cx } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'
import { ArrowDownRight } from '@cerberus-design/icons'

export function BasicButtonPreview() {
  return <button className={button()}>Default styles</button>
}

export function DangerButtonPreview() {
  return (
    <button className={button({ palette: 'danger' })}>Danger styles</button>
  )
}

export function OutlineButtonPreview() {
  return (
    <button className={button({ usage: 'outline' })}>Outline styles</button>
  )
}

export function TextButtonPreview() {
  return <button className={button({ usage: 'text' })}>Text styles</button>
}

export function RoundedButtonPreview() {
  return (
    <button className={button({ shape: 'rounded' })}>Rounded styles</button>
  )
}

export function WithIconButtonPreview() {
  return (
    <button className={button()}>
      <ArrowDownRight />
      With icon
    </button>
  )
}

export function CustomButtonPreview() {
  return (
    <button
      className={cx(
        css({
          bgColor: 'yellow',
          color: 'black',
          _hover: {
            bgColor: 'black',
            color: 'yellow',
          },
        }),
        button(),
      )}
    >
      Wu-Tang Forever
    </button>
  )
}
