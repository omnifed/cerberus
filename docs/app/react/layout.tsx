import type { PropsWithChildren } from 'react'
import { PageLayout, PageSideNav } from '../components/PageLayout'
import SideNav, { type NavList } from '../components/SideNav'
import sideNavData from './side-nav.json'
import type { Metadata } from 'next/types'

interface ReactProps {}

export const metadata: Metadata = {
  title: 'Cerberus Design System | React',
}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData as NavList} />
      </PageSideNav>

      {props.children}
    </PageLayout>
  )
}
