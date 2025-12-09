import type { PropsWithChildren } from 'react'
import { TagRoot, type TagRootProps } from './primitives'
import { ClosableTag, type ClosableTagProps } from './closable'

function isClosableTag(props: TagProps): props is ClosableTagProps {
  return 'onClick' in props && typeof props.onClick !== 'undefined'
}

// Component

export type TagProps = TagRootProps | ClosableTagProps

/**
 * The Tag component is used to display a meta descriptions.
 * @see https://cerberus.digitalu.design/docs/components/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: PropsWithChildren<TagProps>) {
  const { children } = props

  if (isClosableTag(props)) {
    const { onClick, ...rootProps } = props
    return (
      <ClosableTag onClick={onClick} {...rootProps}>
        {children}
      </ClosableTag>
    )
  }

  const rootProps = props as TagRootProps
  return (
    <TagRoot data-palette={rootProps.palette ?? 'page'} {...rootProps}>
      {children}
    </TagRoot>
  )
}
