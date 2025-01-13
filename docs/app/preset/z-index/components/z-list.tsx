import { css } from '@cerberus/styled-system/css'
import { tokens } from '@cerberus-design/panda-preset'
import { hstack } from '@cerberus/styled-system/patterns'

export default function ZList() {
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
        {Object.entries(tokens.zIndex).map(([key, value]) => (
          <li
            className={css({
              borderTop: '1px solid',
              borderColor: 'page.border.initial',
              py: '8',
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
                  color: 'page.text.100',
                  pb: '4 !important',
                  textStyle: 'body-sm !important',
                })}
              >
                Token: <code>{key}</code>
              </p>
              <p
                className={css({
                  color: 'page.text.100',
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
