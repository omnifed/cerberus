import { FigmaApiHost } from './api'
import { FileNodes } from './types'
import { GetFileNodesResponse } from '@figma/rest-api-spec'

export type FileNodesMixin = {
  /**
   * Fetches the nodes from the Figma API.
   * @param this FigmaApiHost
   * @param nodeIds string
   * @returns Promise<GetFileNodesResponse | undefined>
   */
  getNodes: (
    this: FigmaApiHost,
    nodeIds: string,
  ) => Promise<GetFileNodesResponse | undefined>
  /**
   * Returns the local variable collections.
   */
  fileNodes: () => FileNodes
}

export const fileNodesMixin: FileNodesMixin = {
  async getNodes(
    this: FigmaApiHost,
    nodeIds: string,
  ): Promise<GetFileNodesResponse | undefined> {
    try {
      const resp = await this.figmaFetch(`/nodes?ids=${nodeIds}`)
      const data = await resp.json()
      this.localFileNodes = data
      return data
    } catch (error) {
      throw new Error('Error fetching file nodes: ', { cause: error })
    }
  },

  fileNodes(this: FigmaApiHost): FileNodes {
    return this.localFileNodes ?? null
  },
}
