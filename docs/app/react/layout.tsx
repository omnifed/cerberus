import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next/types'
import { PageLayout, PageSideNav } from '../components/PageLayout'
import SideNav from '../components/SideNav'
import { sideNavData } from './side-nav'

interface ReactProps {}

export const metadata: Metadata = {
  title: 'Cerberus Design System | React',
}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData} />
      </PageSideNav>

      {props.children}
    </PageLayout>
  )
}
