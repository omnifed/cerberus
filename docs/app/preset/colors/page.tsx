import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import ColorDetails from './[name]/components/color-details'
import Colors from './colors.mdx'
import { FilterablePaletteSection } from './components/FilterablePaletteSection'

export default function ColorsPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Colors />
          <FilterablePaletteSection />
          <ColorDetails />
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
