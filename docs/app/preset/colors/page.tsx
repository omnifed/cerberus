import { Suspense } from 'react'
import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import ColorDetails from './components/color-details'
import Colors from './colors.mdx'
import { FilterablePaletteSection } from './components/FilterablePaletteSection'

export default function ColorsPage() {
  return (
    <>
      <PageMainContent>
        <main>
          <Colors />
          <Suspense>
            <FilterablePaletteSection />
            <ColorDetails />
          </Suspense>
        </main>
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
