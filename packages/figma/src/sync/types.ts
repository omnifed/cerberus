import {
  GetFileNodesResponse,
  GetLocalVariablesResponse,
  GetPublishedVariablesResponse,
  LocalVariableCollection as OldLocalVariableCollection,
  VariableValue,
} from '@figma/rest-api-spec'

// Local Variables

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

// Published Variables

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

// File Nodes

export type FileNodes = GetFileNodesResponse | null
