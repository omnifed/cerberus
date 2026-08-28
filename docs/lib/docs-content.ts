import { docs, type Doc } from '#site/content'

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

export function getDataGridDocs() {
  return docs.filter((d) => d.category === 'data-grid')
}

export function getDataGridDocLinks(): OrderedNavTree {
  const GROUP_ORDER = ['Get started', 'Layout', 'Features', 'Reference']

  const groupedDocs = getDataGridDocs()
    .sort((a, b) => a.order - b.order)
    .reduce((acc, doc) => {
      if (!acc[doc.group]) {
        acc[doc.group] = []
      }

      acc[doc.group].push({
        ...doc,
        href: `/docs/${doc.slugAsParams}`,
      })

      return acc
    }, {} as NavGroup)

  return GROUP_ORDER.map((groupName) => ({
    groupName,
    links: groupedDocs[groupName],
  }))
}
