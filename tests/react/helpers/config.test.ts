import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import { defineIcons, $cerberusIcons } from '@cerberus-design/react'
import { WarningFilled, WarningAlt, Checkmark } from '@cerberus-design/icons'

describe('defineIcons', () => {
  const defaultIcons = {
    invalid: WarningFilled,
    toggleChecked: Checkmark,
  }

  afterEach(() => {
    defineIcons(defaultIcons)
  })

  test('should be a function', () => {
    expect(typeof defineIcons).toBe('function')
  })

  test('should define a custom set of icons', () => {
    const customIcons = defineIcons({
      invalid: WarningAlt,
    })
    expect(customIcons.invalid).toEqual(WarningAlt)
  })

  test('should throw an error when an invalid property is not defined', () => {
    expect(() => {
      // don't clog up the console with errors
      spyOn(console, 'error').mockImplementation(() => null)
      defineIcons({
        // @ts-expect-error for test purposes
        valid: WarningAlt,
      })
    }).toThrow()
  })
})

describe('$cerberusIcons', () => {
  test('should be an object', () => {
    expect(typeof $cerberusIcons).toBe('object')
  })

  test('should have an invalid property', () => {
    expect($cerberusIcons.invalid).toEqual(WarningFilled)
  })

  test('should have a toggleChecked property', () => {
    expect($cerberusIcons.toggleChecked).toEqual(Checkmark)
  })
})
