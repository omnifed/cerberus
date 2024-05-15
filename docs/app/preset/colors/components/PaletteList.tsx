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
    const nestedTokenKeys = tokenKeys.filter(
      (tokenKey) => typeof token![tokenKey as keyof typeof token] === 'object',
    )

    const nestedTokens = normalizeNestedTokens({
      nestedTokenKeys,
      token,
      key,
      palette,
    })

    return { ...acc, ...nestedTokens }
  }, {})
}

interface NormalizeNestedTokensProps {
  nestedTokenKeys: string[]
  token: SemanticToken
  key: string
  palette: Sentiment
}

function normalizeNestedTokens(data: NormalizeNestedTokensProps) {
  const { token, key, palette } = data
  return data.nestedTokenKeys.reduce((acc, tokenKey) => {
    const nestedToken: Object = token![tokenKey as keyof typeof token]

    if (nestedToken.hasOwnProperty('value'))
      return { ...acc, [`${palette}-${key}-${tokenKey}`]: nestedToken }

    const nestedTokenKeys = Object.keys(nestedToken)
    const normalizedNestedToken = nestedTokenKeys.reduce(
      (acc, nestedTokenKey) => {
        const value = nestedToken[nestedTokenKey as keyof typeof nestedToken]
        const tokenName = `${palette}-${key}-${tokenKey}-${nestedTokenKey}`
        return { ...acc, [tokenName]: value }
      },
      {},
    )
    return { ...acc, ...normalizedNestedToken }
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
