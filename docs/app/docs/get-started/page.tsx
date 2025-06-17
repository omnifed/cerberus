import { redirect } from 'next/navigation'

// export async function generateStaticParams() {
//   const tabs = await getTwoTabsData()
//   return tabs.map((tab) => ({
//     slug: tab,
//   }))
// }

export default function GetStartedPage() {
  redirect('/docs/get-started/installation')
}
