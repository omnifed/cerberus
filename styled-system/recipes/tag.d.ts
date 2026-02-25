/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TagVariant {
  /**
   * @default "page"
   */
  palette:
    | 'page'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'secondaryAction'
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
  /**
   * @default "filled"
   */
  usage: 'filled' | 'outlined'
  /**
   * @default "pill"
   */
  shape: 'pill' | 'square'
}

type TagVariantMap = {
  [key in keyof TagVariant]: Array<TagVariant[key]>
}

export type TagVariantProps = {
  [key in keyof TagVariant]?: TagVariant[key] | undefined
}

export interface TagRecipe {
  __type: TagVariantProps;
  (props?: TagVariantProps): string
  raw: (props?: TagVariantProps) => TagVariantProps
  variantMap: TagVariantMap
  variantKeys: Array<keyof TagVariant>
  splitVariantProps<Props extends TagVariantProps>(
    props: Props,
  ): [TagVariantProps, Pretty<DistributiveOmit<Props, keyof TagVariantProps>>]
  getVariantProps: (props?: TagVariantProps) => TagVariantProps
}

/**
 * WCAG Level AAA compliant tag styles.
 */
export declare const tag: TagRecipe
