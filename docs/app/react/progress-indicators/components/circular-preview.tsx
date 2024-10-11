import { CircularProgress } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

export function CircularPreview() {
  return (
    <div
      className={css({
        w: '12rem',
      })}
    >
      <CircularProgress now={75} title="Course completion" />
    </div>
  )
}
