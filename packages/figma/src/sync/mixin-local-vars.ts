import {
  GetLocalVariablesResponse,
  LocalVariableCollection as OldLocalVariableCollection,
  VariableValue,
} from '@figma/rest-api-spec'
import { FigmaApiHost } from './api'

export type LocalCollections = { [key: string]: LocalVariableCollection } | null
export type LocalVariables =
  | GetLocalVariablesResponse['meta']['variables']
  | null
export type LocalVariableCollection =
  | (OldLocalVariableCollection & {
      isExtension?: boolean
      variableOverrides?: VariableOverride
    })
  | null

export type VariableOverride = {
  readonly [variableId: string]: VariableOverrideContent
}
export type VariableOverrideContent = {
  [extendedModeId: string]: VariableValue
}

export type LocalVarsMixin = {
  /**
   * Returns the local variable collections.
   */
  localCollections: () => LocalCollections
  /**
   * Returns the local variables.
   */
  localVariables: () => LocalVariables
}

export const localVarsMixin: LocalVarsMixin = {
  localCollections(this: FigmaApiHost): LocalCollections {
    return this.localVars?.meta.variableCollections ?? {}
  },
  localVariables(this: FigmaApiHost): LocalVariables {
    return this.localVars?.meta.variables ?? {}
  },
}
