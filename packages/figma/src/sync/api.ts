import {
  GetFileNodesResponse,
  GetLocalVariablesResponse,
  GetPublishedVariablesResponse,
} from '@figma/rest-api-spec'
import { LocalVarsMixin } from './mixin-local-vars'
import { PublishedVarsMixin } from './mixin-published-vars'
import { FileNodesMixin } from './mixin-nodes'

export interface FigmaApiHost {
  localVars: GetLocalVariablesResponse | null
  publishedVars: GetPublishedVariablesResponse | null
  localFileNodes: GetFileNodesResponse | null
}

class FigmaApi implements FigmaApiHost {
  private baseUrl: string = 'https://api.figma.com'
  private file: string
  private token: string

  public localVars: GetLocalVariablesResponse | null = null
  public publishedVars: GetPublishedVariablesResponse | null = null
  public localFileNodes: GetFileNodesResponse | null = null

  constructor(token: string, fileId: string) {
    this.token = token
    this.file = fileId
  }

  private figmaFetch = async (path: string) => {
    return await fetch(`${this.figmaUrl}${path}`, {
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
    })
  }

  public get figmaUrl(): string {
    return `${this.baseUrl}/v1/files/${this.file}`
  }

  async getLocalVariables(): Promise<GetLocalVariablesResponse> {
    try {
      const resp = await this.figmaFetch('/variables/local')
      const data = await resp.json()
      this.localVars = data
      return data
    } catch (error) {
      console.error('Error fetching local variables:', error)
      process.exit(1)
    }
  }

  async getPublishedVariables(): Promise<GetPublishedVariablesResponse> {
    try {
      const resp = await this.figmaFetch('/variables/published')
      const data = await resp.json()
      this.publishedVars = data
      return data
    } catch (error) {
      console.error('Error fetching published variables:', error)
      process.exit(1)
    }
  }

  async getNodes(nodeIds: string): Promise<GetFileNodesResponse> {
    try {
      const resp = await this.figmaFetch(`/nodes?ids=${nodeIds}`)
      const data = await resp.json()
      this.localFileNodes = data
      return data
    } catch (error) {
      console.error('Error fetching file nodes:', error)
      process.exit(1)
    }
  }
}

export type FigmaApiType = FigmaApi

/**
 * The core API for accessing Figma REST endpoints.
 * @param - token: Figma API token
 * @param - fileId: Figma File ID to sync
 * @returns new FigmaApi instance with the mixins applied
 */
export function figma(
  token: string,
  fileId: string,
  mixins?: (LocalVarsMixin | PublishedVarsMixin | FileNodesMixin)[],
): FigmaApi {
  if (mixins?.length) {
    for (const mixin of mixins) {
      Object.assign(FigmaApi.prototype, mixin)
    }
  }

  return new FigmaApi(token, fileId)
}
