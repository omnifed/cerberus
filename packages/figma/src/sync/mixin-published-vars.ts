import { GetPublishedVariablesResponse } from '@figma/rest-api-spec'
import { FigmaApiHost } from './api'

export type Collections =
  | GetPublishedVariablesResponse['meta']['variableCollections']
  | null
export type Variables =
  | GetPublishedVariablesResponse['meta']['variables']
  | null

export type ListItem = {
  id: string
  name: string
}

export type PublishedVarsMixin = {
  /**
   * Get the collections from the published variable response.
   * @returns GetPublishedVariablesResponse['meta']['variableCollections']
   */
  collections: () => Collections
  /**
   * Get the variables from the published variable response.
   * @returns GetPublishedVariablesResponse['meta']['variables']
   */
  variables: () => Variables
  /**
   * Create a list of collections from the published variable response.
   * @returns ListItem[]
   */
  createCollectionList: () => ListItem[]
  /**
   * Create a list of variables from the published variable response.
   * @returns ListItem[]
   */
  createVariableList: () => ListItem[]
}

export const publishedVarsMixin: PublishedVarsMixin = {
  collections(this: FigmaApiHost): Collections {
    return this.publishedVars?.meta.variableCollections ?? {}
  },

  variables(this: FigmaApiHost): Variables {
    return this.publishedVars?.meta.variables ?? {}
  },

  createCollectionList(this: FigmaApiHost): ListItem[] {
    return Object.values(
      this.publishedVars?.meta.variableCollections ?? {},
    ).map((collection) => ({
      id: collection.id,
      name: collection.name,
    }))
  },

  createVariableList(this: FigmaApiHost): ListItem[] {
    return Object.values(this.publishedVars?.meta.variables ?? {}).map(
      (variable) => ({
        id: variable.id,
        name: variable.name,
      }),
    )
  },
}
