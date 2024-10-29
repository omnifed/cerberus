import OnThisPage from '../../components/OnThisPage'
import { PageMainContent, PageSections } from '../../components/PageLayout'
import IconDetails from './components/IconDetails'

type Params = Promise<{ name: string }>
interface IconDetailsPageProps {
  params: Params
}

export default async function IconDetailsPage(props: IconDetailsPageProps) {
  const { name } = await props.params
  return (
    <>
      <PageMainContent>
        <IconDetails iconName={(name as string) ?? ''} />
      </PageMainContent>

      <PageSections>
        <OnThisPage />
      </PageSections>
    </>
  )
}
