import type { DocConfig, DocPage } from './types'
import { items as getStartedItems } from './get-started/[slug]/content/items'
import { items as componentsItems } from './components/[slug]/content/items'

export const config: DocConfig = {
  meta: {
    title: 'Cerberus Design System | Docs',
    description:
      'Explore the Cerberus Design System documentation to learn how to use our components and design guidelines effectively.',
  },

  items: [
    {
      id: '1',
      slug: 'get-started',
      label: 'Get Started',
      href: '/docs/get-started/installation',
      meta: {
        title: 'Get Started with Cerberus Design System',
        description:
          'Learn how to get started with the Cerberus Design System, including installation and basic usage.',
      },
      items: getStartedItems as DocPage[],
    },
    {
      id: '2',
      slug: 'components',
      label: 'Components',
      href: '/docs/components/overview',
      meta: {
        title: 'Components in Cerberus Design System',
        description:
          'Explore the various components available in the Cerberus Design System and how to use them.',
      },
      items: componentsItems as DocPage[],
    },
    {
      id: '3',
      slug: 'styling',
      label: 'Styling',
      href: '/docs/styling',
      meta: {
        title: 'Custom Tokens in Cerberus Design System',
        description:
          'Learn how to style components in the Cerberus Design System to match your design requirements.',
      },
      items: [],
    },
    {
      id: '4',
      slug: 'theming',
      label: 'Theming',
      href: '/docs/theming',
      meta: {
        title: 'Theming in Cerberus Design System',
        description:
          'Discover how to create and apply themes in the Cerberus Design System for a consistent look and feel.',
      },
      items: [],
    },
  ],
}
