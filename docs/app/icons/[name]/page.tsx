import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import IconDetails from './components/IconDetails'

interface IconDetailsPageProps {
  params: {
    name: string
  }
}

export default function IconDetailsPage(props: IconDetailsPageProps) {
  return (
    <>
      <PageMainContent>
        <IconDetails iconName={props.params.name} />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
