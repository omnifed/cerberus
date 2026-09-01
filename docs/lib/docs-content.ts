import { docs, type Doc } from '#site/content'
import { config } from '@/app/docs/docs.config'
import { DocPage } from '@/app/docs/types'

export type { Doc }
export type NavGroup = Record<string, Array<Doc & { href: string }>>
export type OrderedNavTree = Array<{
  groupName: string
  links: Array<Doc & { href: string }>
}>

export function getDocs() {
  return docs
}

export function getDocSlugs() {
  return docs.map((doc) => ({ slug: doc.slugAsParams.split('/') }))
}

export function getDocPost(path: string): Doc | void {
  return docs.find((d) => d.slugAsParams === path)
}

/**
 * Get the navigation items for a specific documentation page.
 * @param routeGroup The route group (e.g., 'get-started', 'components').
 * @param slug The slug of the page.
 * @returns List of navigation items for the specified page.
 */
export function getDocPageNavItems(category: string) {
  switch (category) {
    case 'data-grid':
      return getDataGridDocLinks()
    case 'get-started':
      return getGetStartedDocLinks()
    default:
      return getNonVeliteItems(category)
  }
}

function getNonVeliteItems(category: string) {
  const groupItems =
    config.items.find((item) => item.slug === category) ??
    ({
      items: [],
    } as { items: DocPage[] })
  if (!groupItems) {
    throw new Error(`No items found for route group: ${category}`)
  }

  return groupItems.items || []
}

// Get

export function getGetStartedDocs() {
  return _filterByCategory('get-started')
}

export function getGetStartedDocLinks(): OrderedNavTree {
  return _getOrderedDocLinks(['Overview', 'AI', 'Presets'], 'get-started')
}

// Data Grid

export function getDataGridDocs() {
  return _filterByCategory('data-grid')
}

export function getDataGridDocLinks(): OrderedNavTree {
  return _getOrderedDocLinks(
    ['Get started', 'Layout', 'Features', 'Reference'],
    'data-grid',
  )
}

// utils

function _filterByCategory(category: string) {
  return docs.filter((d) => d.category === category)
}

export function _getOrderedDocLinks(
  orderedList: string[],
  category: string,
): OrderedNavTree {
  const docs = _filterByCategory(category)
  const groupedDocs = docs
    .sort((a, b) => a.order - b.order)
    .reduce((acc, doc) => {
      if (!acc[doc.group]) {
        acc[doc.group] = []
      }

      acc[doc.group].push({
        ...doc,
        href: doc.path,
      })

      return acc
    }, {} as NavGroup)

  return orderedList.map((groupName) => ({
    groupName,
    links: groupedDocs[groupName],
  }))
}
