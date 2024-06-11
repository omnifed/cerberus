import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Doc, { frontmatter } from './doc.mdx'
import FeatureHeader from '@/app/components/FeatureHeader'

export default function ButtonPage() {
  return (
    <>
      <PageMainContent>
        <FeatureHeader
          heading={frontmatter.heading}
          description={frontmatter.description}
          src={frontmatter.featureImg}
        />
        <ApiLinks {...frontmatter} />
        <main>
          <Doc />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
