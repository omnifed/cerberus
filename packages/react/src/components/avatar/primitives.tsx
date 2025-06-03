import {
  Avatar,
  type AvatarFallbackProps as ArkAvatarFallbackProps,
  type AvatarImageProps as ArkAvatarImageProps,
  type AvatarRootProps as ArkAvatarRootProps,
} from '@ark-ui/react/avatar'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module provides the primitive components for the Avatar component.
 * @module 'avatar/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(avatar)

/**
 * The root component of the Avatar.
 */
export const AvatarRoot = withSlotRecipe<AvatarRootProps>(Avatar.Root, 'root')
export type AvatarRootProps = CerberusPrimitiveProps<
  ArkAvatarRootProps & AvatarVariantProps
>

/**
 * The image component of the Avatar.
 */
export const AvatarImage = withSlotRecipe<ArkAvatarImageProps>(
  Avatar.Image,
  'image',
)
export type AvatarImageProps = CerberusPrimitiveProps<ArkAvatarImageProps>

/**
 * The fallback component of the Avatar.
 */
export const AvatarFallback = withSlotRecipe<ArkAvatarFallbackProps>(
  Avatar.Fallback,
  'fallback',
)
export type AvatarFallbackProps = CerberusPrimitiveProps<ArkAvatarFallbackProps>
