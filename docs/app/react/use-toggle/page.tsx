import ApiLinks from '@/app/components/ApiLinks'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import UseThemeDoc, { frontmatter } from './doc.mdx'

export default function UseTogglePage() {
  return (
    <>
      <PageMainContent>
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
