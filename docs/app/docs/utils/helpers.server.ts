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
 * Get metadata for a specific page based on its slug.
 * @param slug
 * @returns Metadata for the page with the given slug.
 */
export function getPageMetadata(slug: string): Metadata {
  const item = config.items.find((item) => item.id === slug)
  if (!item) {
    throw new Error(`No metadata found for slug: ${slug}`)
  }
  return item.meta
}

/**
 * Get the items for a specific page based on its slug.
 * @param slug
 * @returns The item data for the page with the given slug.
 */
export function getDocPageData(
  routeGroup: string,
  slug: string,
): DocPage | null {
  if (!slug) return null
  const groupItems = config.items.find((item) => item.slug === routeGroup) ?? {
    items: [],
  }
  if (!groupItems) {
    throw new Error(`No items found for route group: ${routeGroup}`)
  }

  const slugItem = groupItems.items.find((item) => item.slug === slug)
  if (!slugItem) {
    throw new Error(`No items found for slug: ${slug}`)
  }
  return slugItem
}

/**
 * Get the navigation items for a specific documentation page.
 * @param routeGroup The route group (e.g., 'get-started', 'components').
 * @param slug The slug of the page.
 * @returns List of navigation items for the specified page.
 */
export function getDocPageNavItems(routeGroup: string) {
  const groupItems = config.items.find((item) => item.slug === routeGroup) ?? {
    items: [],
  }
  if (!groupItems) {
    throw new Error(`No items found for route group: ${routeGroup}`)
  }

  return (
    groupItems.items.map((item) => ({
      id: item.id,
      label: item.label,
      slug: item.slug,
      href: item.href,
    })) || []
  )
}
