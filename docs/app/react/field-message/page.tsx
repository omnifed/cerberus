import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Doc, { frontmatter } from './doc.mdx'

export default function FieldMessagePage() {
  return (
    <>
      <PageMainContent>
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
