import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import UseThemeDoc from './doc.mdx'

export default function UseThemePage() {
  return (
    <>
      <PageMainContent>
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
