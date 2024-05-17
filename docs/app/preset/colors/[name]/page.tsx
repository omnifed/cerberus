import OnThisPage from '../../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../../components/PageLayout'
import ColorDetails from './components/color-details'

interface ColorDetailsPageProps {
  params: {
    name: string
  }
}

export default function ColorDetailsPage(props: ColorDetailsPageProps) {
  return (
    <>
      <PageMainContent>
        <ColorDetails token={props.params.name} />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
