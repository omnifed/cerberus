import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Colors from './colors.mdx'

export default function ColorsPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Colors />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
