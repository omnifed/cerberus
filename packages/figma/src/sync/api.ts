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
  /**
   * Fetches data from the Figma API.
   * @param path - The path to fetch data from.
   * @returns A promise that resolves to the fetched data.
   */
  figmaFetch: (path: string) => Promise<Response>
}

class FigmaApi implements FigmaApiHost {
  private baseUrl: string = 'https://api.figma.com'

  #file: string
  #token: string

  public localVars: GetLocalVariablesResponse | null = null
  public publishedVars: GetPublishedVariablesResponse | null = null
  public localFileNodes: GetFileNodesResponse | null = null

  constructor(token: string, fileId: string) {
    this.#token = token
    this.#file = fileId
  }

  public get figmaUrl(): string {
    return `${this.baseUrl}/v1/files/${this.#file}`
  }

  public figmaFetch = async (path: string): Promise<Response> => {
    return await fetch(`${this.figmaUrl}${path}`, {
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.#token,
      },
    })
  }
}

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

export type FigmaApiType = FigmaApi
