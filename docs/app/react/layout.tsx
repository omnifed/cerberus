import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { markdown } from '../styles/markdown'

export const metadata: Metadata = {
  title: 'Cerberus Design System | React',
  description:
    'The Cerberus Design System React library provides a set of components and utilities to help you build your application.',
}

interface ReactProps {}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <div className={markdown}>
      <header>Nav sidebar</header>
      {props.children}
    </div>
  )
}
