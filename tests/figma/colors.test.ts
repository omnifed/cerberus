import { describe, test, expect } from 'bun:test'
import {
  colorApproximatelyEqual,
  parseColor,
  rgbToHex,
  rgbaToString,
} from '@cerberus/figma'

describe('Figma color utils', () => {
  test('colorApproximatelyEqual', () => {
    const black = { r: 0, g: 0, b: 0 }
    const black2 = { r: 0, g: 0, b: 1 }
    expect(colorApproximatelyEqual(black, black2)).toBe(false)
    expect(colorApproximatelyEqual(black, black)).toBe(true)
    expect(colorApproximatelyEqual(black, { r: 2, g: 0, b: 0 })).toBe(false)
  })

  test('parseColor', () => {
    expect(parseColor('#000000')).toEqual({ r: 0, g: 0, b: 0 })
    expect(parseColor('#FFFFFF')).toEqual({ r: 1, g: 1, b: 1 })
    expect(parseColor('#FF0000')).toEqual({ r: 1, g: 0, b: 0 })
    expect(parseColor('#00FF00')).toEqual({ r: 0, g: 1, b: 0 })
    expect(parseColor('#0000FF')).toEqual({ r: 0, g: 0, b: 1 })
    expect(parseColor('#FF00FF')).toEqual({ r: 1, g: 0, b: 1 })
    expect(parseColor('#00FFFF')).toEqual({ r: 0, g: 1, b: 1 })
    expect(parseColor('#FFFF00')).toEqual({ r: 1, g: 1, b: 0 })
    expect(parseColor('#808080')).toEqual({
      r: 0.5019607843137255,
      g: 0.5019607843137255,
      b: 0.5019607843137255,
    })
    expect(parseColor('#00000000')).toEqual({ r: 0, g: 0, b: 0, a: 0 })
    expect(parseColor('#FFFFFFFF')).toEqual({ r: 1, g: 1, b: 1, a: 1 })
    expect(parseColor('#FF000000')).toEqual({ r: 1, g: 0, b: 0, a: 0 })
    expect(parseColor('#00FF0000')).toEqual({ r: 0, g: 1, b: 0, a: 0 })
    expect(parseColor('#0000FF00')).toEqual({ r: 0, g: 0, b: 1, a: 0 })
    expect(parseColor('#000000FF')).toEqual({ r: 0, g: 0, b: 0, a: 1 })
    expect(parseColor('#FF0000FF')).toEqual({ r: 1, g: 0, b: 0, a: 1 })
    expect(parseColor('#00FF00FF')).toEqual({ r: 0, g: 1, b: 0, a: 1 })
    expect(parseColor('#0000FFFF')).toEqual({ r: 0, g: 0, b: 1, a: 1 })
    expect(parseColor('#FF00FFFF')).toEqual({ r: 1, g: 0, b: 1, a: 1 })
    expect(parseColor('#00FFFFFF')).toEqual({ r: 0, g: 1, b: 1, a: 1 })
    expect(parseColor('#FFFFFFFF')).toEqual({ r: 1, g: 1, b: 1, a: 1 })
  })

  test('rgbToHex', () => {
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toEqual('#000000')
    expect(rgbToHex({ r: 1, g: 1, b: 1 })).toEqual('#ffffff')
    expect(rgbToHex({ r: 1, g: 0, b: 0 })).toEqual('#ff0000')
    expect(rgbToHex({ r: 0, g: 1, b: 0 })).toEqual('#00ff00')
    expect(rgbToHex({ r: 0, g: 0, b: 1 })).toEqual('#0000ff')
    expect(rgbToHex({ r: 1, g: 1, b: 1, a: 0.5 })).toEqual('#ffffff80')
  })

  test('rgbaToString', () => {
    expect(rgbaToString({ r: 0, g: 0, b: 0, a: 0 })).toEqual('rgba(0, 0, 0, 0)')
    expect(rgbaToString({ r: 1, g: 1, b: 1, a: 1 })).toEqual(
      'rgba(255, 255, 255, 1)',
    )
    expect(rgbaToString({ r: 1, g: 0, b: 0, a: 1 })).toEqual(
      'rgba(255, 0, 0, 1)',
    )
    expect(rgbaToString({ r: 0, g: 1, b: 0, a: 1 })).toEqual(
      'rgba(0, 255, 0, 1)',
    )
    expect(rgbaToString({ r: 0, g: 0, b: 1, a: 1 })).toEqual(
      'rgba(0, 0, 255, 1)',
    )
    expect(rgbaToString({ r: 1, g: 1, b: 1, a: 0.5 })).toEqual(
      'rgba(255, 255, 255, 0.5)',
    )
  })
})
