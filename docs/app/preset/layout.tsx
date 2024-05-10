import type { PropsWithChildren } from 'react'
import {
  PageLayout,
  PageMainContent,
  PageSideNav,
  PageSections,
} from '../components/PageLayout'
import SideNav, { type NavList } from '../components/SideNav'
import sideNavData from './side-nav.json'

interface PresetProps {}

export default function PresetLayout(props: PropsWithChildren<PresetProps>) {
  return (
    <PageLayout>
      <PageSideNav>
        <SideNav navList={sideNavData as NavList} />
      </PageSideNav>

      <PageMainContent>{props.children}</PageMainContent>

      <PageSections>Page sections</PageSections>
    </PageLayout>
  )
}
