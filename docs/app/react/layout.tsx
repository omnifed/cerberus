import type { PropsWithChildren } from 'react'
import { cx } from '@/styled-system/css'
import { container } from '@/styled-system/patterns'
import { markdown } from '../styles/markdown'

interface ReactProps {}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <div
      className={cx(
        container({
          pt: '12',
        }),
        markdown,
      )}
    >
      <header>Nav sidebar</header>
      {props.children}
    </div>
  )
}
