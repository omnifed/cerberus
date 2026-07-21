import { describe, test, expect } from 'bun:test'
import { slider } from '../../../../packages/panda-preset/src/recipes/slots/slider'

describe('Slider Recipe', () => {
  test('should be defined', () => {
    expect(slider).toBeDefined()
  })
})
