import type { RouteProps } from '@/app/types'
import { getDocPageData } from '../../utils/helpers.server'

export default async function GetStartedSlugPage(props: RouteProps) {
  const { slug } = await props.params
  const page = getDocPageData('get-started', slug)
  const Doc = page?.Content

  if (!page) {
    console.error(`No items found for slug: ${slug}`)
    return null
  }

  if (Doc) return <Doc />
  return null
}
