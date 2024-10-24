import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Doc from './doc.mdx'

export default function TypographyPage() {
  return (
    <>
      <PageMainContent>
        <Doc />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
