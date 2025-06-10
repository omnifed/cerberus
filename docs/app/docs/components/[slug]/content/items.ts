import Overview from './overview.mdx'

export const items = [
  {
    id: '1.1',
    label: 'Concepts',
    href: '',
  },
  {
    id: '1.2',
    label: 'Overview',
    slug: 'overview',
    href: '/docs/components/overview',
    meta: {
      title: 'Overview of Cerberus Design System',
      description:
        'Get an overview of the Cerberus Design System, its components, and how to use them effectively.',
    },
    Content: Overview,
  },
  {
    id: '1.2',
    label: 'Layout',
    href: '',
  },
  {
    id: '1.3',
    label: 'Components',
    href: '',
  },
  {
    id: '1.3.1',
    label: 'Button',
    slug: 'button',
    href: '/docs/components/button',
    meta: {
      title: 'Button Component in Cerberus Design System',
      description:
        'Learn how to use the Button component in the Cerberus Design System, including its properties and examples.',
    },
    Content: () => null,
  },
]
