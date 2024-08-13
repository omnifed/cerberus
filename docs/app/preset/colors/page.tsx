import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import Colors from './colors.mdx'
import { FilterablePaletteSection } from './components/FilterablePaletteSection'

export default function ColorsPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Colors />
          <FilterablePaletteSection />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
