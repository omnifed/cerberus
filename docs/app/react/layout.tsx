import type { PropsWithChildren } from 'react'
import {
  PageLayout,
  PageMainContent,
  PageSideNav,
  PageSections,
} from '../components/PageLayout'
import SideNav, { type NavList } from '../components/SideNav'
import sideNavData from './side-nav.json'

interface ReactProps {}

export default function ReactLayout(props: PropsWithChildren<ReactProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData as NavList} />
      </PageSideNav>

      <PageMainContent>{props.children}</PageMainContent>

      <PageSections>On this page</PageSections>
    </PageLayout>
  )
}
