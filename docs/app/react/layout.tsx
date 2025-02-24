import type { PropsWithChildren } from 'react'
import { PageLayout, PageSideNav } from '@/app/components/PageLayout'
import SideNav from '@/app/components/SideNav'
import { sideNavData } from './side-nav'

export default function Layout(props: PropsWithChildren<object>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData} />
      </PageSideNav>

      {props.children}
    </PageLayout>
  )
}
