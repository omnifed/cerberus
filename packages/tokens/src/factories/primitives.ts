import { type RGBA, rgbaToString, rgbToHex } from '@cerberus/figma/helpers'
import type { Recursive, Token, Tokens } from '@pandacss/types'
import { GRADIENT_TEXT, GRADIENTS } from '../const'
import { PrimitiveGroup, primitives } from '../primitives'
import { GradientText, GradientValue } from '../theme-contract/theme-contracts.types'

/**
 * This module contains factories for creating primitive PandaCSS tokens.
 */

export function createCerberusPrimitiveColors(): NonNullable<Tokens['colors']> {
  return _buildPrimitiveColorsByGroup('cerberus')
}

export function createAcheronPrimitiveColors(): NonNullable<Tokens['colors']> {
  return _buildPrimitiveColorsByGroup('acheron')
}

export function createElysiumPrimitiveColors(): NonNullable<Tokens['colors']> {
  return _buildPrimitiveColorsByGroup('elysium')
}

export function createOceanusPrimitiveColors(): NonNullable<Tokens['colors']> {
  return _buildPrimitiveColorsByGroup('oceanus')
}

export function createPrimitiveSpacing(): NonNullable<Tokens['spacing']> {
  const mode = primitives.spacing.modes.value

  return Object.keys(primitives.spacing.tokens).reduce(
    (acc, key) => {
      const idx = key as keyof typeof primitives.spacing.tokens
      const token = primitives.spacing.tokens[idx]
      let rawValue = token.valuesByMode[mode as keyof typeof token.valuesByMode] as
        | number
        | string

      if (token.name === 'none') {
        rawValue = 0
      }

      const value = `${Number(rawValue) / 16}rem`

      // Skip old tokens that Figma is inlcuding in data
      if (String(idx).includes('corner-radii.')) return acc

      acc[idx as keyof typeof acc] = {
        value,
        description: token.description,
      }
      return acc
    },
    {} as NonNullable<Tokens['spacing']>,
  )
}

export function createPrimitiveRadii(): NonNullable<Tokens['radii']> {
  const mode = primitives.radii.modes.value

  return Object.keys(primitives.radii.tokens).reduce(
    (acc, key) => {
      const idx = key as keyof typeof primitives.radii.tokens
      const token = primitives.radii.tokens[idx]
      const pxValue = token.valuesByMode[
        mode as keyof typeof token.valuesByMode
      ] as number
      const value = `${pxValue / 16}rem`

      acc[idx as keyof typeof acc] = {
        value,
        description: token.description,
      }
      return acc
    },
    {} as NonNullable<Tokens['radii']>,
  )
}

// Getters

export function getContractGradientToken(): GradientText {
  return GRADIENT_TEXT
}

export function getGradients(): GradientValue[] {
  return GRADIENTS
}

// Helpers

function _buildPrimitiveColorsByGroup(
  groupKey: PrimitiveGroup,
): NonNullable<Tokens['colors']> {
  const group = primitives[groupKey]
  const mode = group.collection.defaultModeId

  const tokens = Object.keys(group.tokens).reduce(
    (acc, key) => {
      const token = group.tokens[key]
      const color = token.valuesByMode[mode] as unknown as RGBA

      let finalColor: string | RGBA = color

      if (token.resolvedType !== 'COLOR') {
        return acc
      }

      if (key.includes('drop-shadow')) {
        finalColor = rgbaToString(color)
      } else {
        finalColor = rgbToHex(color)
      }

      const path = key.split('.')
      let current = acc

      for (let i = 0; i < path.length; i++) {
        const part = path[i]
        const isLast = i === path.length - 1

        if (isLast) {
          current[part] = {
            value: finalColor,
            description: token.description,
          }
        } else {
          if (!current[part]) {
            current[part] = {}
          }
          current = current[part] as Recursive<Token<string>>
        }
      }
      return acc
    },
    {} as NonNullable<Tokens['colors']>,
  )

  return tokens
}
