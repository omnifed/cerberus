import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Doc from './doc.mdx'

export default function ShowPage() {
  return (
    <>
      <PageMainContent>
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
