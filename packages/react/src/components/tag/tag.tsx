import { TagClosable, type ClosableTagProps } from './closable'
import {
  TagGradient,
  TagRoot,
  type TagGradientProps,
  type TagRootProps,
} from './primitives'

export type FilledTagProps = TagRootProps & {
  gradient?: never
  onClick?: never
}

export type GradientTagProps = TagGradientProps & {
  palette?: never
  onClick?: never
}

export type TagProps = FilledTagProps | GradientTagProps | ClosableTagProps

/**
 * The Tag component is used to display a meta descriptions. It renders
 * `Tag.Closable` when `onClick` is set, `Tag.Gradient` when `gradient` is set,
 * and `Tag.Root` otherwise.
 * @see https://cerberus.digitalu.design/docs/components/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function TagEl(props: TagProps) {
  if (isClosableTag(props)) {
    return <TagClosable {...props} />
  }

  if (props.gradient) {
    return <TagGradient {...props} />
  }

  return <TagRoot data-palette={props.palette ?? 'page'} {...props} />
}

function isClosableTag(props: TagProps): props is ClosableTagProps {
  return 'onClick' in props && typeof props.onClick !== 'undefined'
}
