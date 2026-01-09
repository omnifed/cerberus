import { resolve } from 'node:path'

export function getTokensDataPath() {
  return resolve(
    import.meta.dir,
    '..', // src
    '..', // figma
    '..', // packages
    'tokens',
    'src',
    'data',
  )
}
