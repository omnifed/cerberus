import { ProgressBar, Tag } from '@cerberus-design/react'
import { hstack, vstack } from '@cerberus/styled-system/patterns'

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
        <ProgressBar size="sm" value={75} />
        <Tag shape="pill">Rounded</Tag>
      </div>
      <div
        className={vstack({
          gap: '4',
          w: 'full',
        })}
      >
        <ProgressBar size="sm" usage="block" value={75} />
        <Tag shape="pill">Block</Tag>
      </div>
    </div>
  )
}
