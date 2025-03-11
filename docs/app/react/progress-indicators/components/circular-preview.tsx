import { CircularProgress } from '@cerberus-design/react'
import { hstack } from 'styled-system/patterns'

export function CircularPreview() {
  return (
    <div
      className={hstack({
        w: '1/2',
      })}
    >
      <CircularProgress
        id="25"
        label="25 example"
        now={25}
        title="Course completion"
      />
      <CircularProgress
        id="50"
        label="50 example"
        now={50}
        title="Course completion"
      />
      <CircularProgress
        id="75"
        label="75 example"
        now={75}
        title="Course completion"
      />
      <CircularProgress
        id="complete"
        label="complete example"
        now={100}
        title="Course completion"
      />
    </div>
  )
}
