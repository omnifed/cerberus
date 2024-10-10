import { Spinner } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

export function CustomSpinner() {
  return (
    <div
      className={css({
        color: 'yellow',
        w: 20,
      })}
    >
      <Spinner />
    </div>
  )
}
