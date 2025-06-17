import CerberusFactory, {
  frontmatter as cerberusFactoryFrontmatter,
} from '../cerberus-factory.mdx'
import ResponsiveDesign, {
  frontmatter as responsiveDesignFrontmatter,
} from '../responsive-design.mdx'
import ConditionalStyles, {
  frontmatter as conditionalStylesFrontmatter,
} from '../conditional-styles.mdx'
import CSSVars, { frontmatter as cssVarsFrontmatter } from '../css-vars.mdx'
import ThemeMode, {
  frontmatter as themeModeFrontmatter,
} from '../theme-mode.mdx'
import ColorOpacityMod, {
  frontmatter as colorOpacityModFrontmatter,
} from '../color-opacity-modifier.mdx'
import VirtualColor, {
  frontmatter as virtualColorFrontmatter,
} from '../virtual-color.mdx'
import CascadeLayers, {
  frontmatter as cascadeLayersFrontmatter,
} from '../cascade-layers.mdx'

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
  {
    id: '1.3',
    label: 'Responsive Design',
    slug: 'responsive-design',
    frontmatter: responsiveDesignFrontmatter,
    href: '/docs/styling/responsive-design',
    meta: {
      title: 'Responsive Design in Cerberus Design System',
      description:
        'Learn about Responsive Design and how to create responsive layouts using the Cerberus Design System.',
    },
    Content: ResponsiveDesign,
  },
  {
    id: '1.5',
    label: 'CSS Variables',
    slug: 'css-vars',
    frontmatter: cssVarsFrontmatter,
    href: '/docs/styling/css-vars',
    meta: {
      title: 'CSS Variables in Cerberus Design System',
      description:
        'Learn how to use CSS Variables in Cerberus Design System for dynamic theming and styling.',
    },
    Content: CSSVars,
  },
  {
    id: '1.6',
    label: 'Themes & Color Modes',
    slug: 'theme-mode',
    frontmatter: themeModeFrontmatter,
    href: '/docs/styling/theme-mode',
    meta: {
      title: 'Theme Mode in Cerberus Design System',
      description:
        'Learn how to implement and manage theme modes (light/dark) in Cerberus Design System.',
    },
    Content: ThemeMode,
  },
  {
    id: '1.7',
    label: 'Color Opacity Modifier',
    slug: 'color-opacity-modifier',
    frontmatter: colorOpacityModFrontmatter,
    href: '/docs/styling/color-opacity-modifier',
    meta: {
      title: 'Color Opacity Modifier in Cerberus Design System',
      description:
        'Learn how to use the Color Opacity Modifier in Cerberus Design System for advanced color manipulation.',
    },
    Content: ColorOpacityMod,
  },
  {
    id: '1.4',
    label: 'Conditional Styles',
    slug: 'conditional-styles',
    frontmatter: conditionalStylesFrontmatter,
    href: '/docs/styling/conditional-styles',
    meta: {
      title: 'Conditional Styles in Cerberus Design System',
      description:
        'Learn how to apply conditional styles in Cerberus Design System',
    },
    Content: ConditionalStyles,
  },
  {
    id: '1.8',
    label: 'Virtual Color',
    slug: 'virtual-color',
    frontmatter: virtualColorFrontmatter,
    href: '/docs/styling/virtual-color',
    meta: {
      title: 'Virtual Color in Cerberus Design System',
      description:
        'Learn how to use Virtual Color in Cerberus Design System for advanced color management.',
    },
    Content: VirtualColor,
  },
  {
    id: '1.9',
    label: 'Cascade Layers',
    slug: 'cascade-layers',
    frontmatter: cascadeLayersFrontmatter,
    href: '/docs/styling/cascade-layers',
    meta: {
      title: 'Cascade Layers in Cerberus Design System',
      description:
        'Learn how to use Cascade Layers in Cerberus Design System for better style management.',
    },
    Content: CascadeLayers,
  },
]
