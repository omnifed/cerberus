import { exit } from 'node:process'
import { GetPublishedVariablesResponse } from '@figma/rest-api-spec'
import { FigmaApiHost } from './api'
import { Collections, ListItem, Variables } from './types'

export type PublishedVarsMixin = {
  /**
   * Fetches the published variables from Figma API.
   * @param this
   * @returns GetPublishedVariablesResponse | null
   */
  getPublishedVariables: (
    this: FigmaApiHost,
  ) => Promise<GetPublishedVariablesResponse | undefined>
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
  async getPublishedVariables(
    this: FigmaApiHost,
  ): Promise<GetPublishedVariablesResponse | undefined> {
    try {
      const resp = await this.figmaFetch('/variables/published')
      const data = await resp.json()
      this.publishedVars = data
      return data
    } catch (error) {
      console.error('Error fetching published variables:', error)
      exit(1)
    }
  },

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
