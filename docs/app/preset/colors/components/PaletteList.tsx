import { type Sentiment } from '@cerberus-design/panda-preset'
import { cq, hstack } from 'styled-system/patterns'
import { normalizeTokens, getTokenList } from '../helpers/normalize'
import AvatarSwatch from './AvatarSwatch'
import { css, cx } from 'styled-system/css'
import { Tooltip } from '@cerberus-design/react'

interface PaletteListProps {
  palette: Sentiment
}

export default function PaletteList(props: PaletteListProps) {
  const { palette } = props
  const tokens = normalizeTokens(getTokenList(palette), palette)

  return (
    <section
      className={cq({
        mb: '8',
      })}
    >
      <ul
        className={hstack({
          justifyContent: {
            '@/sm': 'center',
            '@/2xl': 'flex-start',
          },
          gap: {
            '@/sm': '4',
            '@/2xl': '0',
          },
          flexWrap: {
            '@/sm': 'wrap',
            '@/2xl': 'nowrap',
          },
          overflowX: {
            '@/sm': 'initial',
            '@/md': 'auto',
            '@/2xl': 'initial',
          },
        })}
      >
        {Object.keys(tokens).map((token, idx) => (
          <li
            className={cx(
              'peer',
              css({
                marginInlineStart: '-0.70rem',
                zIndex: idx.toString(),
                _firstOfType: {
                  marginInlineStart: 'initial',
                },
                _motionSafe: {
                  transitionProperty: 'transform',
                  transitionDuration: '150ms',
                  transitionTimingFunction: 'ease-in-out',
                },
                _hover: {
                  transform: 'scale(1.2)',
                },
              }),
            )}
            key={token}
          >
            <Tooltip content={token}>
              <AvatarSwatch
                palette={palette}
                token={tokens[token as keyof typeof tokens]}
                tokenName={token}
              />
            </Tooltip>
          </li>
        ))}
      </ul>
    </section>
  )
}
