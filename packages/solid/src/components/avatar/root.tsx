import { Avatar, type AvatarRootProps } from '@ark-ui/solid/avatar'
import { cx } from 'styled-system/css'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

/**
 * The root component of the Avatar.
 */
export function AvatarRoot(props: AvatarRootProps & AvatarVariantProps) {
  const { gradient, shape, size, ...rootProps } = props
  const styles = avatar({ gradient, shape, size })
  return <Avatar.Root {...rootProps} class={cx(styles.root, rootProps.class)} />
}
