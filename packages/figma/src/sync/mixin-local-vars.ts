import { exit } from 'node:process'
import { GetLocalVariablesResponse } from '@figma/rest-api-spec'
import { LocalCollections, LocalVariables } from './types'
import { FigmaApiHost } from './api'

export type LocalVarsMixin = {
  /**
   * Returns the local variable collections.
   */
  localCollections: () => LocalCollections
  /**
   * Returns the local variables.
   */
  localVariables: () => LocalVariables
  /**
   * Fetches local variables from Figma API.
   */
  getLocalVariables: () => Promise<GetLocalVariablesResponse | undefined>
}

export const localVarsMixin: LocalVarsMixin = {
  async getLocalVariables(
    this: FigmaApiHost,
  ): Promise<GetLocalVariablesResponse | undefined> {
    try {
      const resp = await this.figmaFetch('/variables/local')
      const data = await resp.json()
      this.localVars = data
      return data
    } catch (error) {
      console.error('Error fetching local variables:', error)
      exit(1)
    }
  },

  localCollections(this: FigmaApiHost): LocalCollections {
    if (!this.localVars) return null
    return this.localVars.meta.variableCollections ?? {}
  },

  localVariables(this: FigmaApiHost): LocalVariables {
    if (!this.localVars) return null
    return this.localVars.meta.variables ?? {}
  },
}
