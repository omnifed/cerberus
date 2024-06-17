import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'
import PageTabs from '@/app/components/PageTabs'

import Overview from './overview.mdx'
import Guidelines from './guidelines.mdx'
import Dev, { frontmatter } from './dev.mdx'
import A11y from './a11y.mdx'

export default function InputPage() {
  return (
    <>
      <PageMainContent>
        <FeatureHeader
          heading={frontmatter.heading}
          description={frontmatter.description}
          a11y={frontmatter.a11y as MatchFeatureKind}
        />

        <PageTabs
          description="Tabs component details"
          overview={<Overview />}
          guidelines={<Guidelines />}
          dev={
            <main>
              <ApiLinks {...frontmatter} />
              <Dev />
            </main>
          }
          a11y={<A11y />}
        />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
