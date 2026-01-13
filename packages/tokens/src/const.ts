import {
  GradientText,
  GradientValue,
} from './theme-contract/theme-contracts.types'
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
  'charon-light',
  'charon-dark',
  'nyx-light',
  'nyx-dark',
  'amphiaraus-light',
  'amphiaraus-dark',
  'styx-light',
  'styx-dark',
  'thanatos-light',
  'thanatos-dark',
  'hades-light',
  'hades-dark',
  'asphodel-light',
  'asphodel-dark',
]

export const GRADIENT_TEXT: GradientText = {
  start: {} as SemanticToken,
  end: {} as SemanticToken,
  text: {} as SemanticToken,
}
