import { Asterisk } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus-design/styled-system/patterns'

interface OverviewListProps {
  intro?: string
  rules: string[]
}

export default function OverviewList(props: OverviewListProps) {
  return (
    <div
      className={css({
        py: '12',
      })}
    >
      <ul
        className={vstack({
          alignItems: 'flex-start',
          gap: '4',
        })}
      >
        <Show when={Boolean(props.intro)}>
          <li
            className={css({
              color: 'neutral.text.100',
              pb: '4',
              textStyle: 'body-xl',
            })}
          >
            {props.intro}
          </li>
        </Show>

        {props.rules.map((rule, index) => (
          <li
            className={css({
              alignItems: 'center',
              display: 'inline-flex',
              gap: '4',
            })}
            key={index}
          >
            <Asterisk
              className={css({
                flexShrink: '0',
              })}
              style={{
                transform: `rotate(${index * 45}deg)`,
              }}
            />
            {rule}
          </li>
        ))}
      </ul>
    </div>
  )
}
