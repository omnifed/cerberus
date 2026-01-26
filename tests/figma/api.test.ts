import { describe, test, expect, spyOn } from 'bun:test'
import { figma } from '@cerberus/figma'

describe('Figma API', () => {
  const token = 'your_figma_api_token'
  const fileId = 'your_figma_file_id'

  test('should create a new FigmaApi instance', () => {
    const api = figma(token, fileId)

    // @ts-expect-error this is a private variable
    expect(api.token).not.toBeDefined()
    // @ts-expect-error this is a private variable
    expect(api.fileId).not.toBeDefined()
  })

  test('should have public properties', async () => {
    const api = figma(token, fileId)

    expect(api.figmaUrl).toEqual(`https://api.figma.com/v1/files/${fileId}`)
    expect(api.localVars).toBeDefined()
    expect(api.publishedVars).toBeDefined()
    expect(api.localFileNodes).toBeDefined()

    expect(api.figmaFetch).toBeDefined()

    // Spy and override implementation
    const response = new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
    const figmaSpy = spyOn(api, 'figmaFetch').mockResolvedValue(response)

    const result = await figmaSpy('/test')
    expect(result.ok).toBe(true)
  })
})
