import { cerberus, Spinner } from '@cerberus-design/react'

export function CustomSpinner() {
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
