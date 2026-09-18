import { ArrowDownRight } from '@carbon/icons-react'
import { IconButton } from '@cerberus-design/react'
import Link from 'next/link'

export function AsChildDemo() {
  return (
    <IconButton ariaLabel="link example" asChild>
      <Link href="/docs/components/icon-button">
        <ArrowDownRight />
      </Link>
    </IconButton>
  )
}
