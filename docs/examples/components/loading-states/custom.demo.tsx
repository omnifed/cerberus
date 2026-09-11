import { cerberus, Spinner } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <cerberus.div
      css={{
        color: 'yellow',
        w: 20,
      }}
    >
      <Spinner />
    </cerberus.div>
  )
}
