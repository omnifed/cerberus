import { Tag } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'

export function OverviewPreview() {
  return (
    <div
      className={hstack({
        justify: 'space-between',
        w: '3/4',
      })}
    >
      <div className={vstack()}>
        <div
          aria-busy="true"
          className={css({
            rounded: 'sm',
          })}
        >
          <h2>Trash content</h2>
          <p>
            Trash content is a place where you can find all the content that you
            have deleted. You can restore or permanently delete the content from
            here.
          </p>
        </div>
        <Tag shape="pill">Skeleton</Tag>
      </div>
    </div>
  )
}
