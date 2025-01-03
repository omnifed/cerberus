import categoriesData from '@/app/data/categories.react.json'
import { type NavList } from '../components/SideNav'
import type { LinkProps } from 'next/link'

interface Category {
  name: string
  description: string
  items: string[]
  next: string[]
  new: string[]
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
      'Text',
      'Local Storage',
    ],
    next: [],
    new: ['Text', 'Local Storage'],
  },
}
const hooksGroup: CategoriesList = {
  overview: {
    name: 'Hooks & Helpers',
    description: 'React hooks and helper functions for Cerberus',
    items: [
      'trap-focus',
      'use-date',
      'use-modal',
      'use-root-colors',
      'use-theme',
      'use-theme-context',
      'use-toggle',
    ],
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
      const formattedName = name === 'Getting Started' ? '' : name
      navList.push({
        label: name,
        route:
          `/react/${formattedName.replace(/ /g, '-').toLowerCase()}` as LinkProps<string>['href'],
        tag: getCategoryItemTags(name, category.new, category.next),
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
): '' | 'new' | 'next' {
  if (newItems.includes(category)) return 'new'
  if (next.includes(category)) return 'next'
  return ''
}

// now we need to flatten the data structure
export const sideNavData: NavList = [
  ...createSideNavData(overviewGroup),
  ...createSideNavData(categoriesData),
  ...createSideNavData(hooksGroup),
]
