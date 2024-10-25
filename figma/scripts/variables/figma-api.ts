export default class FigmaApi {
  private baseUrl: string = 'https://api.figma.com'
  private file: string = 'ducwqOCxoxcWc3ReV3FYd8'
  private token: string

  constructor(token: string) {
    this.token = token
  }

  async getLocalVariables() {
    const resp = await fetch(
      `${this.baseUrl}/v1/files/${this.file}/variables/local`,
      {
        headers: {
          Accept: '*/*',
          'X-Figma-Token': this.token,
        },
      },
    )
    return await resp.json()
  }

  async getTextStyles(nodeIds: string) {
    const resp = await fetch(
      `${this.baseUrl}/v1/files/${this.file}/nodes?ids=${nodeIds}`,
      {
        headers: {
          Accept: '*/*',
          'X-Figma-Token': this.token,
        },
      },
    )
    return await resp.json()
  }
}
