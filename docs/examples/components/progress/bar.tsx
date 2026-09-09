import { ProgressBar, Tag } from '@cerberus-design/react'
import { hstack, vstack } from 'styled-system/patterns'

export function OverviewPreview() {
  return (
    <div
      className={hstack({
        gap: '10',
        w: '3/4',
      })}
    >
      <div
        className={vstack({
          gap: '4',
          w: 'full',
        })}
      >
        <ProgressBar
          id="rounded-example"
          label="rounded progress example"
          size="sm"
          now={75}
        />
        <Tag shape="pill">Rounded</Tag>
      </div>
      <div
        className={vstack({
          gap: '4',
          w: 'full',
        })}
      >
        <ProgressBar
          id="block-example"
          label="block progress example"
          size="sm"
          usage="block"
          now={75}
        />
        <Tag shape="pill">Block</Tag>
      </div>
    </div>
  )
}
