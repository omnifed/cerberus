import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { markdown } from '../styles/markdown'

interface ReactProps {}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <div className={markdown}>
      <header>Nav sidebar</header>
      {props.children}
    </div>
  )
}
