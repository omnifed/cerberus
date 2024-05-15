import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Theme from './theme.mdx'

export default function ThemePage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Theme />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
