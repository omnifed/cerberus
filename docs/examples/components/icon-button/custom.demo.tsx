import { Tuning } from '@carbon/icons-react'
import { IconButton } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <IconButton
      ariaLabel="custom button"
      css={{
        bgColor: 'danger.bg.initial',
        color: 'danger.text.initial',
        rounded: 'md',
        transform: 'skew(-10deg)',
        _hover: {
          bgColor: 'black',
          color: 'yellow',
        },
      }}
    >
      <Tuning />
    </IconButton>
  )
}
