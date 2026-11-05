import { Button } from '@cerberus-design/react'
import Link from 'next/link'

export function AsChildDemo() {
  return (
    <Button asChild>
      <Link href="/docs/components/composition" data-as-child>
        Button-styled Link
      </Link>
    </Button>
  )
}
