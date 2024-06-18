import ApiLinks from '@/app/components/ApiLinks'
import {
  TabPageContent,
  TabPageContentLayout,
} from '../../components/PageLayout'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'
import PageTabs from '@/app/components/PageTabs'

import Overview, { frontmatter } from './overview.mdx'
import Guidelines from './guidelines.mdx'
import Dev, { frontmatter as devFrontmatter } from './dev.mdx'
import A11y from './a11y.mdx'

export default function NavMenuPage() {
  return (
    <>
      <TabPageContent>
        <FeatureHeader
          heading={frontmatter.heading}
          description={frontmatter.description}
          a11y={frontmatter.a11y as MatchFeatureKind}
        />

        <PageTabs
          description="Tabs component details"
          overview={
            <TabPageContentLayout>
              <Overview />
            </TabPageContentLayout>
          }
          guidelines={
            <TabPageContentLayout>
              <Guidelines />
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
          a11y={
            <TabPageContentLayout>
              <A11y />
            </TabPageContentLayout>
          }
        />
      </TabPageContent>
    </>
  )
}
