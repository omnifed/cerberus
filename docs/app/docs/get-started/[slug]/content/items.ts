// 'use client'

import Installation from './installation.mdx'

export const items = [
  {
    id: '1.1',
    label: 'Overview',
    href: '',
  },
  {
    id: '1.2',
    label: 'Installation',
    slug: 'installation',
    href: '/docs/get-started/installation',
    meta: {
      title: 'Installation Guide for Cerberus Design System',
      description:
        'Follow the steps to install the Cerberus Design System in your project.',
    },
    Content: Installation,
  },
  {
    id: '1.3',
    label: 'FAQ',
    slug: 'faq',
    href: '/docs/get-started/faq',
    meta: {
      title: 'Frequently Asked Questions about Cerberus Design System',
      description:
        'Find answers to common questions about the Cerberus Design System, including usage, components, and theming.',
    },
    Content: () => null,
  },
]
