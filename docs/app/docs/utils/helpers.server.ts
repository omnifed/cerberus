import { getDataGridDocLinks, getGetStartedDocLinks } from '@/lib/docs-content'
import type { Metadata } from 'next'
import { config } from '../docs.config'
import type { DocPage } from '../types'

/**
 * Get metadata for the documentation site.
 * @returns Metadata for the documentation site.
 */
export function getDocsMetadata(): Metadata {
  return config.meta
}

/**
 * @deprecated replace this after fully converting to velite
 * Retrieve the main docs navigation items.
 * @returns List of documentation items.
 */
export function getDocsItems() {
  return config.items.map((item) => ({
    id: item.id,
    label: item.label,
    slug: item.slug,
    href: item.href,
  }))
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
