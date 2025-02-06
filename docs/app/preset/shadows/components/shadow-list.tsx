import { Text } from '@cerberus-design/react'
import { cq, hstack, vstack, square } from '@cerberus/styled-system/patterns'
import { tokens } from '@cerberus-design/panda-preset'
import { css } from '@cerberus/styled-system/css'

export default function ShadowsList() {
  const shadows = tokens.shadows
  return (
    <div
      className={cq({
        mt: 6,
      })}
    >
      <ul
        className={hstack({
          gap: 4,
          flexWrap: 'wrap',
        })}
      >
        {Object.keys(shadows).map((elevation, index) => (
          <li
            className={css({
              flexShrink: 0,
              w: {
                '@/sm': 'full',
                '@/xl': 'calc(50% - 1rem)',
                '@/4xl': 'calc(33.3333% - 1rem)',
              },
            })}
            key={index}
          >
            <div
              data-elevation={elevation}
              className={square({
                alignItems: 'center',
                display: 'flex',
                bgColor: 'page.surface.initial',
                flexDirection: 'column',
                justifyContent: 'center',
                size: '15rem',
                rounded: 'xl',
                '&:is([data-elevation=sm])': {
                  shadow: 'sm',
                },
                '&:is([data-elevation=md])': {
                  shadow: 'md',
                },
                '&:is([data-elevation=lg])': {
                  shadow: 'lg',
                },
              })}
            >
              <footer
                className={vstack({
                  alignItems: 'flex-start',
                  pb: 4,
                  pxi: '5',
                  pt: 3,
                })}
              >
                <Text as="small" textStyle="body-sm" textTransform="uppercase">
                  {elevation}
                </Text>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
