/**
 * Local Cerberus anatomy definitions for non-Ark APIs
 * Anatomy are primitive values only, not abstractions
 */

export const admonitionAnatomy: Anatomy = _createAnatomy([
  'root',
  'indicator',
  'heading',
  'description',
  'content',
])

export const buttonAnatomy: Anatomy = _createAnatomy(['root', 'group'])

export const fileStatusAnatomy: Anatomy = _createAnatomy([
  'root',
  'icon',
  'info',
  'name',
  'statusText',
])

// Helpers

type Anatomy = {
  keys: () => string[]
}

function _createAnatomy(keys: string[]): Anatomy {
  return {
    keys: () => keys,
  }
}
