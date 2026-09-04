import { TypeStyle } from '@figma/rest-api-spec'

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

/**
 * These two types are only needed because figma api type doesn't include textWrapStyle
 * which is being returned by the api
 */
export type TextWrapStyle = 'BALANCE' | 'PRETTY' | 'STABLE'
export type TextNodeStyle = TypeStyle & {
  textWrapStyle?: TextWrapStyle
}
