import type { PropsWithChildren } from 'react'
import { PageLayout, PageSideNav } from '../components/PageLayout'
import SideNav, { type NavList } from '../components/SideNav'
import sideNavData from './side-nav.json'

interface PresetProps {}

export default function PresetLayout(props: PropsWithChildren<PresetProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData as NavList} />
      </PageSideNav>

      {props.children}
    </PageLayout>
  )
}
