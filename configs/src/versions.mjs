import { version as currentVersion } from '../../packages/data-grid/package.json'

export const version = currentVersion
export const nextTag = 'next'

// Order matters
export const packages = [
  'figma',
  'tokens',
  'preset-acheron-theme',
  'preset-cerberus-theme',
  'preset-elysium-theme',
  'panda-preset',
  'react',
  'signals',
  'data-grid',
]
