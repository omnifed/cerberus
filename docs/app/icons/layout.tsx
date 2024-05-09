import type { PropsWithChildren } from 'react'
import { cx } from '@/styled-system/css'
import { container } from '@/styled-system/patterns'
import { markdown } from '../styles/markdown'

interface IconsProps {}

export default function IconsLayout(props: PropsWithChildren<IconsProps>) {
  return (
    <div
      className={cx(
        container({
          pt: '12',
        }),
        markdown,
      )}
    >
      {props.children}
    </div>
  )
}
