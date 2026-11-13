import { ClosableTag } from './closable'
import {
  type ClosableTagProps,
  FilledTag,
  type FilledTagProps,
  GradientTag,
  type GradientTagProps,
} from './primitives'

export type TagProps = FilledTagProps | GradientTagProps | ClosableTagProps

/**
 * The Tag component is used to display a meta descriptions.
 * @see https://cerberus.digitalu.design/docs/components/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: TagProps) {
  if (isClosableTag(props)) {
    return <ClosableTag {...props} />
  }

  if (props.gradient) {
    return <GradientTag {...props} />
  }

  return <FilledTag data-palette={props.palette ?? 'page'} {...props} />
}

function isClosableTag(props: TagProps): props is ClosableTagProps {
  return 'onClick' in props && typeof props.onClick !== 'undefined'
}
