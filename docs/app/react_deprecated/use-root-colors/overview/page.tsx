import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '@/app/components/OnThisPage'
import { PageMainContent, PageSections } from '@/app/components/PageLayout'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'

import UseThemeDoc, { frontmatter } from './doc.mdx'

export default function UseRootColorsPage() {
  return (
    <>
      <PageMainContent>
        <FeatureHeader
          heading={frontmatter.heading}
          description={frontmatter.description}
          a11y={frontmatter.a11y as MatchFeatureKind}
        />
        <ApiLinks {...frontmatter} />
        <main>
          <UseThemeDoc />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
