import type { PropsWithChildren } from 'react'
import { PageLayout, PageSideNav } from '../components/PageLayout'
import SideNav, { type NavList } from '../components/SideNav'
import sideNavData from './side-nav.json'

interface IconsProps {}

export default function IconsLayout(props: PropsWithChildren<IconsProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData as NavList} />
      </PageSideNav>

      {props.children}
    </PageLayout>
  )
}
