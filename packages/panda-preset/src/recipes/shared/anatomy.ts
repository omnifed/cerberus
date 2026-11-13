// Local Cerberus anatomy definitions for non-Ark APIs

export const admonitionAnatomy: Anatomy = _createAnatomy([
  'root',
  'indicator',
  'heading',
  'description',
  'content',
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
