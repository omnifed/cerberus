import OnThisPage from '../components/OnThisPage'
import { PageMainContent, PageSections } from '../components/PageLayout'
import Overview from './overview.mdx'

export default function ReactPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Overview />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
