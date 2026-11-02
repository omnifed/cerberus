import { GradientText, GradientValue } from './theme-contract/theme-contracts.types'
import { SemanticToken, Sentiment } from './semantic-tokens.types'

export const PALETTES: Sentiment[] = [
  'page',
  'action',
  'secondaryAction',
  'info',
  'warning',
  'danger',
]

export const GRADIENTS: GradientValue[] = [
  'amphiaraus-dark',
  'amphiaraus-light',
  'asphodel-light',
  'asphodel-dark',
  'charon-light',
  'charon-dark',
  'hades-light',
  'hades-dark',
  'nyx-light',
  'nyx-dark',
  'styx-light',
  'styx-dark',
  'thanatos-light',
  'thanatos-dark',
]

export const GRADIENT_TEXT: GradientText = {
  start: {} as SemanticToken,
  end: {} as SemanticToken,
  text: {} as SemanticToken,
}
