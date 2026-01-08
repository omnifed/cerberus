import { Tokens } from '@pandacss/dev'
import {
  GradientText,
  GradientValue,
} from '../theme-contract/theme-contracts.types'
import { GRADIENT_TEXT, GRADIENTS } from '../const'
import { primitives } from '../tokens'
import { VariableColor } from '../types'

// Factories

export function createPrimitiveColors(): NonNullable<Tokens['colors']> {
  const mode = primitives.colors.modes.value

  return Object.keys(primitives.colors.tokens).reduce(
    (acc, key) => {
      const idx = key as keyof typeof primitives.colors.tokens
      const token = primitives.colors.tokens[idx]
      const color = token.valuesByMode[mode] as VariableColor

      if (token.resolvedType !== 'COLOR') {
        return acc
      }

      acc[idx] = {
        value: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        description: token.description,
      }
      return acc
    },
    {} as NonNullable<Tokens['colors']>,
  )
}

export function createPrimitiveSpacing(): NonNullable<Tokens['spacing']> {
  const mode = primitives.spacing.modes.value

  return Object.keys(primitives.spacing.tokens).reduce(
    (acc, key) => {
      const idx = key as keyof typeof primitives.spacing.tokens
      const token = primitives.spacing.tokens[idx]
      const pxValue = token.valuesByMode[
        mode as keyof typeof token.valuesByMode
      ] as number
      const value = `${pxValue / 16}rem`

      // Skip old tokens that Figma is inlcuding in data
      if (idx.includes('corner-radii.')) return acc

      acc[idx] = {
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

      acc[idx] = {
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
