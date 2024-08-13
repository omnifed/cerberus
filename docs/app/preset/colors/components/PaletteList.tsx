import { type Sentiment } from '@cerberus-design/panda-preset'
import ColorSwatch from './ColorSwatch'
import { css } from '@cerberus/styled-system/css'
import { cq, grid, gridItem } from '@cerberus/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../helpers/normalize'

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
        className={grid({
          columns: {
            '@/sm': 1,
            '@/lg': 12,
          },
          gap: '4',
          rounded: 'lg',
        })}
      >
        {Object.keys(tokens).map((token) => (
          <li
            className={gridItem({
              colSpan: {
                '@/sm': 1,
                '@/lg': 4,
              },
            })}
            key={token}
          >
            <ColorSwatch
              palette={palette}
              token={tokens[token as keyof typeof tokens]}
              tokenName={token}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
