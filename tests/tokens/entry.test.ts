import { describe, test, expect } from 'bun:test'
import * as tokens from '@cerberus/tokens'

describe('Tokens', () => {
  test('should export rawTokens', () => {
    expect(tokens.rawTokens).toBeDefined()
  })

  test('should export semanticColors', () => {
    expect(tokens.semanticColors).toBeDefined()
  })

  test('should export colors', () => {
    expect(tokens.colors).toBeDefined()
  })

  test('should export spacing', () => {
    expect(tokens.spacing).toBeDefined()
  })

  test('should export primitiveColorTokens', () => {
    expect(tokens.primitiveColorTokens).toBeDefined()
  })

  test('should export darkTokens', () => {
    expect(tokens.darkTokens).toBeDefined()
  })

  test('should export lightTokens', () => {
    expect(tokens.lightTokens).toBeDefined()
  })

  test('should export acheronDarkTokens', () => {
    expect(tokens.acheronDarkTokens).toBeDefined()
  })

  test('should export acheronLightTokens', () => {
    expect(tokens.acheronLightTokens).toBeDefined()
  })

  test('should export themeTokens', () => {
    expect(tokens.themeTokens).toBeDefined()
  })

  test('should export themeGradients', () => {
    expect(tokens.themeGradients).toBeDefined()
  })

  test('should export formatSpacingTokens', () => {
    expect(tokens.formatSpacingTokens).toBeDefined()
  })

  test('should export formatPrimitiveColors', () => {
    expect(tokens.formatPrimitiveColors).toBeDefined()
  })

  test('should export formatPrimitiveGradients', () => {
    expect(tokens.formatPrimitiveGradients).toBeDefined()
  })

  test('should export formatSemanticTokenValue', () => {
    expect(tokens.formatSemanticTokenValue).toBeDefined()
  })

  test('should export formatTextStyles', () => {
    expect(tokens.formatTextStyles).toBeDefined()
  })
})
