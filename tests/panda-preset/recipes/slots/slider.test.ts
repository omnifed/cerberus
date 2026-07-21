import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('Slider Recipe', () => {
  const { slider } = slotRecipes

  test('should be defined', () => {
    expect(slider).toBeDefined()
  })
})
