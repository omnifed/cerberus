import { GetFileNodesResponse } from '@figma/rest-api-spec'
import { FigmaApiHost } from './api'

export type FileNodes = GetFileNodesResponse | null

export type FileNodesMixin = {
  /**
   * Returns the local variable collections.
   */
  fileNodes: () => FileNodes
}

export const fileNodesMixin: FileNodesMixin = {
  fileNodes(this: FigmaApiHost): FileNodes {
    return this.localFileNodes ?? null
  },
}
