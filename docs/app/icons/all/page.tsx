import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import SearchableIcons from './components/searchable-icons'

export default function AllIconsPage() {
  return (
    <>
      <PageMainContent>
        <SearchableIcons />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
