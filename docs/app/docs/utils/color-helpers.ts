import {
  actionTokens,
  dangerTokens,
  infoTokens,
  pageTokens,
  secondaryActionTokens,
  successTokens,
  warningTokens,
  dataVizTokens,
  type SemanticToken,
  type Sentiment,
  type SentimentConfig,
  type Token,
} from '@cerberus-design/panda-preset'

export function getTokenList(palette: Sentiment): SentimentConfig[Sentiment] {
  switch (palette) {
    case 'page':
      return pageTokens.page
    case 'action':
      return actionTokens.action
    case 'secondaryAction':
      return secondaryActionTokens.secondaryAction
    case 'info':
      return infoTokens.info
    case 'success':
      return successTokens.success
    case 'warning':
      return warningTokens.warning
    case 'danger':
      return dangerTokens.danger
    case 'dataViz':
      return dataVizTokens.dataViz as SentimentConfig[Sentiment]
    default:
      throw new Error('Invalid color palette')
  }
}

export function normalizeTokens(
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

export function normalizeNestedTokens(data: NormalizeNestedTokensProps) {
  const { token, key, palette } = data
  return data.nestedTokenKeys.reduce((acc, tokenKey) => {
    const nestedToken = token![tokenKey as keyof typeof token] as Token

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
