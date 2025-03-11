import categoriesData from '@/app/data/categories.react.json'
import { type NavList } from '../components/SideNav'
import type { LinkProps } from 'next/link'

interface Category {
  name: string
  description: string
  items: string[]
  next: string[]
  new: string[]
  deprecated: string[]
}
type CategoriesList = Record<string, Category>

const overviewGroup: CategoriesList = {
  overview: {
    name: 'Overview',
    description: 'Getting started with Cerberus React',
    items: [
      'Getting Started',
      'Loading States',
      'Forms',
      'Feature Flags',
      'Portal',
      'Show',
      'For',
      'Text',
      'Toggle',
      'Local Storage',
    ],
    deprecated: [],
    next: [],
    new: [],
  },
}
const hooksGroup: CategoriesList = {
  overview: {
    name: 'Hooks & Helpers',
    description: 'React hooks and helper functions for Cerberus',
    items: [
      'split-props',
      'trap-focus',
      'use-root-colors',
      'use-theme',
      'use-theme-context',
      'use-toggle',
    ],
    deprecated: ['trap-focus', 'use-toggle'],
    next: [],
    new: [],
  },
}

function createSideNavData(categories: CategoriesList): NavList {
  const navList: NavList = []
  Object.values(categories).forEach((category) => {
    navList.push({
      label: category.name,
      type: 'heading',
    })
    category.items.forEach((name) => {
      navList.push({
        label: name,
        route:
          `/react/${name.replace(/ /g, '-').toLowerCase()}/overview` as LinkProps<string>['href'],
        tag: getCategoryItemTags(
          name,
          category.new,
          category.next,
          category.deprecated,
        ),
        type: 'route',
      })
    })
  })
  return navList
}

function getCategoryItemTags(
  category: string,
  newItems: string[],
  next: string[],
  deprecated: string[],
): '' | 'new' | 'preview' | 'deprecated' {
  if (newItems.includes(category)) return 'new'
  if (next.includes(category)) return 'preview'
  if (deprecated.includes(category)) return 'deprecated'
  return ''
}

// now we need to flatten the data structure
export const sideNavData: NavList = [
  ...createSideNavData(overviewGroup),
  ...createSideNavData(categoriesData),
  ...createSideNavData(hooksGroup),
]
