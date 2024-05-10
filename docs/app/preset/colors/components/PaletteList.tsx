import {
  type Sentiment,
  neutralTokens,
  actionTokens,
  infoTokens,
  successTokens,
  warningTokens,
  dangerTokens,
  type SentimentConfig,
  type SemanticToken,
} from '@cerberus-design/panda-preset'
import ColorSwatch from './ColorSwatch'
import { css } from '@/styled-system/css'
import { grid, gridItem } from '@/styled-system/patterns'

function getTokenList(palette: Sentiment): SentimentConfig[Sentiment] {
  switch (palette) {
    case 'neutral':
      return neutralTokens.neutral
    case 'action':
      return actionTokens.action
    case 'info':
      return infoTokens.info
    case 'success':
      return successTokens.success
    case 'warning':
      return warningTokens.warning
    case 'danger':
      return dangerTokens.danger
    default:
      throw new Error('Invalid color palette')
  }
}

function normalizeTokens(
  tokens: SentimentConfig[Sentiment],
  palette: Sentiment,
) {
  const usage = Object.keys(tokens!)
  return usage.reduce((acc, key) => {
    const token = tokens![key as keyof typeof tokens]
    const tokenKeys = Object.keys(token!)
    const normalizedToken = tokenKeys.reduce((acc, tokenKey) => {
      const value = token![tokenKey as keyof typeof token]
      const tokenName = `${palette}-${key}-${tokenKey}`
      return { ...acc, [tokenName]: value }
    }, {})

    return { ...acc, ...normalizedToken }
  }, {})
}

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
      <p
        className={css({
          textStyle: 'h3 !important',
          textTransform: 'capitalize',
        })}
      >
        {palette}
      </p>
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
              tokenName={token.replace(/-/g, '.')}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
