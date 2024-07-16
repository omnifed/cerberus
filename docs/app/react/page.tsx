import OnThisPage from '../components/OnThisPage'
import { PageMainContent, PageSections } from '../components/PageLayout'
import Installation from './installation.mdx'

export default function ReactPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Installation />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
