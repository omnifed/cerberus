import CerberusFactory, {
  frontmatter as cerberusFactoryFrontmatter,
} from '../cerberus-factory.mdx'

export const concepts = [
  {
    id: '1.1',
    label: 'Concepts',
    href: '',
  },
  {
    id: '1.2',
    label: 'Cerberus Factory',
    slug: 'cerberus-factory',
    frontmatter: cerberusFactoryFrontmatter,
    href: '/docs/styling/cerberus-factory',
    meta: {
      title: 'Cerberus Factory in Cerberus Design System',
      description:
        'Learn about the Cerberus Factory, a powerful tool for managing styles and themes in the Cerberus Design System.',
    },
    Content: CerberusFactory,
  },
]
