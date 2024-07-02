import axios from 'axios'
import {
  GetLocalVariablesResponse,
  PostVariablesRequestBody,
  PostVariablesResponse,
} from '@figma/rest-api-spec'

export default class FigmaApi {
  private baseUrl: string = 'https://api.figma.com'
  private file: string = 'ducwqOCxoxcWc3ReV3FYd8'
  private token: string

  constructor(token: string) {
    this.token = token
  }

  async getLocalVariables() {
    const resp = await axios.request<GetLocalVariablesResponse>({
      url: `${this.baseUrl}/v1/files/${this.file}/variables/local`,
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
    })
    return resp.data
  }

  async postVariables(payload: PostVariablesRequestBody) {
    const resp = await axios.request<PostVariablesResponse>({
      url: `${this.baseUrl}/v1/files/${this.file}/variables`,
      method: 'POST',
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
      data: payload,
    })

    return resp.data
  }
}
