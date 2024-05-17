import { type Sentiment } from '@cerberus-design/panda-preset'
import ColorSwatch from './ColorSwatch'
import { css } from '@/styled-system/css'
import { grid, gridItem } from '@/styled-system/patterns'
import { normalizeTokens, getTokenList } from '../helpers/normalize'

interface PaletteListProps {
  palette: Sentiment
}

export default function PaletteList(props: PaletteListProps) {
  const { palette } = props
  const tokens = normalizeTokens(getTokenList(palette), palette)

  return (
    <section
      className={css({
        mb: '8',
      })}
    >
      <ul
        className={grid({
          bgColor: 'neutral.surface.100',
          columns: 12,
          gap: '4',
          rounded: 'lg',
        })}
      >
        {Object.keys(tokens).map((token) => (
          <li
            className={gridItem({
              colSpan: 3,
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
