import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import UseThemeDoc, { frontmatter } from './doc.mdx'
import FeatureHeader from '@/app/components/FeatureHeader'
import type { MatchFeatureKind } from '@/app/components/MatchFeatureImg'

export default function UseDatePage() {
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
