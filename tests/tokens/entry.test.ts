import { describe, test, expect } from 'bun:test'
import * as tokens from '@cerberus/tokens'

describe('Tokens', () => {
  test('should export createTextStyles', () => {
    expect(tokens.createTextStyles).toBeDefined()
  })

  test('should export theme primitive color creators', () => {
    expect(tokens.createAcheronPrimitiveColors).toBeDefined()
    expect(tokens.createCerberusPrimitiveColors).toBeDefined()
    expect(tokens.createElysiumPrimitiveColors).toBeDefined()
    expect(tokens.createOceanusPrimitiveColors).toBeDefined()
  })

  test('should export createPrimitiveSpacing', () => {
    expect(tokens.createPrimitiveSpacing).toBeDefined()
  })

  test('should export createPrimitiveRadii', () => {
    expect(tokens.createPrimitiveRadii).toBeDefined()
  })

  test('should export getContractGradientToken', () => {
    expect(tokens.getContractGradientToken).toBeDefined()
  })

  test('should export getGradients', () => {
    expect(tokens.getGradients).toBeDefined()
  })

  test('should export createSemanticToken', () => {
    expect(tokens.createSemanticToken).toBeDefined()
  })

  test('should export defineTheme', () => {
    expect(tokens.defineTheme).toBeDefined()
  })
})
