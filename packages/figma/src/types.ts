export type { RGB, RGBA } from '@figma/rest-api-spec'

/**
 * The correct type that is returned from the Figma API.
 */
export type CollectionMode = {
  modeId: string
  name: string
  parentModeId?: string
}

export type NormalizedCollectionMode = Record<string, CollectionMode | string>
