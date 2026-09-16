import { ClientOnly } from '@cerberus-design/react'

// Notice this module is NOT using the 'use-client' directive

export function BasicDemo() {
  return (
    <ClientOnly>
      <div>This content is only rendered on the client side.</div>
    </ClientOnly>
  )
}
