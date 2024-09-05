import { Tag } from '@cerberus-design/react'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import {
  progressBar,
  type ProgressBarVariantProps,
} from '@cerberus/styled-system/recipes'
import type { HtmlHTMLAttributes } from 'react'

type ProgressBarProps = HtmlHTMLAttributes<HTMLDivElement> &
  ProgressBarVariantProps & {
    value: number
  }

function ProgressBar(props: ProgressBarProps) {
  const styles = progressBar({ size: props.size, usage: props.usage })
  const width = {
    width: `${props.value}%`,
  }

  return (
    <div className={styles.root}>
      <div className={styles.bar} style={width} />
    </div>
  )
}

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
