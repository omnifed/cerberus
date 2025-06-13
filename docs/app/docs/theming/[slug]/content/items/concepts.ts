import Overview, { frontmatter as overviewFrontmatter } from '../overview.mdx'
import Tokens, { frontmatter as tokensFrontmatter } from '../tokens.mdx'
import SemanticTokens, {
  frontmatter as semanticTokensFrontmatter,
} from '../semantic-tokens.mdx'
import Recipes, { frontmatter as recipesFrontmatter } from '../recipes.mdx'
import SlotRecipes, {
  frontmatter as slotRecipesFrontmatter,
} from '../slot-recipes.mdx'

export const concepts = [
  {
    id: '1.1',
    label: 'Concepts',
    href: '',
  },
  {
    id: '1.2',
    label: 'Overview',
    slug: 'overview',
    frontmatter: overviewFrontmatter,
    href: '/docs/theming/overview',
    meta: {
      title: 'Theming Cerberus Design System',
      description:
        'Learn how to create and apply themes in the Cerberus Design System for a consistent look and feel.',
    },
    Content: Overview,
  },
  {
    id: '1.3',
    label: 'Tokens',
    slug: 'tokens',
    frontmatter: tokensFrontmatter,
    href: '/docs/theming/tokens',
    meta: {
      title: 'Tokens Cerberus Design System',
      description:
        'Learn how to create and apply themes in the Cerberus Design System for a consistent look and feel.',
    },
    Content: Tokens,
  },
  {
    id: '1.4',
    label: 'Semantic Tokens',
    slug: 'semantic-tokens',
    frontmatter: semanticTokensFrontmatter,
    href: '/docs/theming/semantic-tokens',
    meta: {
      title: 'Semantic Tokens in the Cerberus Design System',
      description:
        'Explore how to use semantic tokens in the Cerberus Design System for a more flexible and maintainable theming approach.',
    },
    Content: SemanticTokens,
  },
  {
    id: '1.5',
    label: 'Recipes',
    slug: 'recipes',
    frontmatter: recipesFrontmatter,
    href: '/docs/theming/recipes',
    meta: {
      title: 'Theming Recipes in the Cerberus Design System',
      description:
        'Explore various theming recipes to customize and enhance the Cerberus Design System.',
    },
    Content: Recipes,
  },
  {
    id: '1.6',
    label: 'Slot Recipes',
    slug: 'slot-recipes',
    frontmatter: slotRecipesFrontmatter,
    href: '/docs/theming/slot-recipes',
    meta: {
      title: 'Slot Recipes in the Cerberus Design System',
      description:
        'Learn how to use slot recipes to create flexible and reusable components in the Cerberus Design System.',
    },
    Content: SlotRecipes,
  },
]
