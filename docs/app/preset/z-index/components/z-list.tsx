import { css } from '@cerberus-design/styled-system/css'
import { zIndex } from '@cerberus-design/panda-preset'
import { hstack } from '@cerberus-design/styled-system/patterns'

interface ZListProps {}

export default function ZList(props: ZListProps) {
  return (
    <div
      className={css({
        mt: '8',
      })}
    >
      <ul
        className={css({
          listStyle: 'none',
          w: 'full',
        })}
      >
        {Object.entries(zIndex).map(([key, value]) => (
          <li
            className={css({
              borderTop: '1px solid',
              borderColor: 'neutral.border.initial',
              py: '4',
              w: 'full',
            })}
            key={key}
          >
            <div
              className={hstack({
                justify: 'space-between',
              })}
            >
              <p
                className={css({
                  color: 'neutral.text.100',
                  pb: '4 !important',
                  textStyle: 'body-sm !important',
                })}
              >
                Token: <code>{key}</code>
              </p>
              <p
                className={css({
                  color: 'neutral.text.100',
                  textStyle: 'body-sm !important',
                })}
              >
                {value.value}
              </p>
            </div>
            <p data-style={key}>{value.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
