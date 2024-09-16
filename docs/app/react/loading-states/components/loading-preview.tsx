import { Circle } from '@/styled-system/jsx'
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
      <div
        className={vstack({
          alignItems: 'flex-start',
        })}
      >
        <div
          className={hstack({
            justify: 'space-between',
            w: 'full',
          })}
        >
          <p
            aria-busy="true"
            className={css({
              rounded: 'sm',
            })}
          >
            This is a description of something.
          </p>
          <div className={hstack()}>
            <Circle aria-busy="true" size="6" />
            <Circle aria-busy="true" size="6" />
            <Circle aria-busy="true" size="6" />
          </div>
        </div>
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
        <Tag
          className={css({
            alignSelf: 'center',
          })}
          shape="pill"
        >
          Skeleton
        </Tag>
      </div>
    </div>
  )
}
