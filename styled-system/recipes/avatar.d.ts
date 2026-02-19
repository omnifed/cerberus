/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface AvatarVariant {
  /**
   * @default "none"
   */
  gradient:
    | 'charon-light'
    | 'charon-dark'
    | 'nyx-light'
    | 'nyx-dark'
    | 'amphiaraus-light'
    | 'amphiaraus-dark'
    | 'styx-light'
    | 'styx-dark'
    | 'thanatos-light'
    | 'thanatos-dark'
    | 'hades-light'
    | 'hades-dark'
    | 'asphodel-light'
    | 'asphodel-dark'
    | 'none'
  /**
   * @default "md"
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  /**
   * @default "circle"
   */
  shape: 'circle' | 'square'
}

type AvatarVariantMap = {
  [key in keyof AvatarVariant]: Array<AvatarVariant[key]>
}

type AvatarSlot = 'root' | 'image' | 'fallback'

export type AvatarVariantProps = {
  [key in keyof AvatarVariant]?:
    | ConditionalValue<AvatarVariant[key]>
    | undefined
}

export interface AvatarRecipe {
  __slot: AvatarSlot
  __type: AvatarVariantProps;
  (props?: AvatarVariantProps): Pretty<Record<AvatarSlot, string>>
  raw: (props?: AvatarVariantProps) => AvatarVariantProps
  variantMap: AvatarVariantMap
  variantKeys: Array<keyof AvatarVariant>
  splitVariantProps<Props extends AvatarVariantProps>(
    props: Props,
  ): [
    AvatarVariantProps,
    Pretty<DistributiveOmit<Props, keyof AvatarVariantProps>>,
  ]
  getVariantProps: (props?: AvatarVariantProps) => AvatarVariantProps
}

export declare const avatar: AvatarRecipe
