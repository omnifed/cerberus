import { CircularProgress } from '@cerberus-design/react'
import { hstack } from '@cerberus-design/styled-system/patterns'

export function CircularPreview() {
  return (
    <div
      className={hstack({
        w: '1/2',
      })}
    >
      <CircularProgress now={25} title="Course completion" />
      <CircularProgress now={50} title="Course completion" />
      <CircularProgress now={75} title="Course completion" />
      <CircularProgress now={100} title="Course completion" />
    </div>
  )
}
