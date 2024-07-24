import ApiLinks from '@/app/components/ApiLinks'
import { TabPageContent, TabPageContentLayout } from '../components/PageLayout'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'
import { OverviewPageTabs } from '@/app/components/PageTabs'

import Overview, { frontmatter } from './overview.mdx'
import Dev, { frontmatter as devFrontmatter } from './dev.mdx'

export default function ReactPage() {
  return (
    <>
      <TabPageContent>
        <FeatureHeader
          heading={frontmatter.heading}
          description={frontmatter.description}
          a11y={frontmatter.a11y as MatchFeatureKind}
        />

        <OverviewPageTabs
          description="Tabs component details"
          overview={
            <TabPageContentLayout>
              <Overview />
            </TabPageContentLayout>
          }
          dev={
            <TabPageContentLayout>
              <main>
                <ApiLinks {...devFrontmatter} />
                <Dev />
              </main>
            </TabPageContentLayout>
          }
        />
      </TabPageContent>
    </>
  )
}
