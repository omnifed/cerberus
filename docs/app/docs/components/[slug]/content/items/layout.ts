import AspectRatio, {
  frontmatter as aspectRatioFrontmatter,
} from '../aspect-ratio.mdx'
import Bleed, { frontmatter as bleedFrontmatter } from '../bleed.mdx'
import Box, { frontmatter as boxFrontmatter } from '../box.mdx'
import Center, { frontmatter as centerFrontmatter } from '../center.mdx'
import Container, {
  frontmatter as containerFrontmatter,
} from '../container.mdx'
import Divider, { frontmatter as dividerFrontmatter } from '../divider.mdx'
import Flex, { frontmatter as flexFrontmatter } from '../flex.mdx'
import Float, { frontmatter as floatFrontmatter } from '../float.mdx'
import Grid, { frontmatter as gridFrontmatter } from '../grid.mdx'
import LinkOverlay, {
  frontmatter as linkOverlayFrontmatter,
} from '../link-overlay.mdx'
import Stack, { frontmatter as stackFrontmatter } from '../stack.mdx'
import Scrollable, {
  frontmatter as scrollableFrontmatter,
} from '../scrollable.mdx'
import Wrap, { frontmatter as wrapFrontmatter } from '../wrap.mdx'

export const layout = [
  {
    id: '1.2',
    label: 'Layout',
    href: '',
  },
  {
    id: '1.2.1',
    label: 'Aspect Ratio',
    slug: 'aspect-ratio',
    href: '/docs/components/aspect-ratio',
    frontmatter: aspectRatioFrontmatter,
    meta: {
      title: 'Aspect Ratio Component in Cerberus Design System',
      description:
        'Learn how to use the Aspect Ratio component in the Cerberus Design System to create responsive layouts.',
    },
    Content: AspectRatio,
  },
  {
    id: '1.2.2',
    label: 'Bleed',
    slug: 'bleed',
    href: '/docs/components/bleed',
    frontmatter: bleedFrontmatter,
    meta: {
      title: 'Bleed Component in Cerberus Design System',
      description:
        'Discover how to use the Bleed component in the Cerberus Design System for creating layouts that extend beyond their container.',
    },
    Content: Bleed,
  },
  {
    id: '1.2.3',
    label: 'Box',
    slug: 'box',
    href: '/docs/components/box',
    frontmatter: boxFrontmatter,
    meta: {
      title: 'Box Component in Cerberus Design System',
      description:
        'Explore the Box component in the Cerberus Design System, which provides a flexible way to create layout containers.',
    },
    Content: Box,
  },
  {
    id: '1.2.4',
    label: 'Center',
    slug: 'center',
    href: '/docs/components/center',
    frontmatter: centerFrontmatter,
    meta: {
      title: 'Center Component in Cerberus Design System',
      description:
        'Learn how to use the Center component in the Cerberus Design System to center content within a layout.',
    },
    Content: Center,
  },
  {
    id: '1.2.5',
    label: 'Container',
    slug: 'container',
    href: '/docs/components/container',
    frontmatter: containerFrontmatter,
    meta: {
      title: 'Container Component in Cerberus Design System',
      description:
        'Understand how to use the Container component in the Cerberus Design System for responsive layouts.',
    },
    Content: Container,
  },
  {
    id: '1.2.6a',
    label: 'Divider',
    slug: 'divider',
    href: '/docs/components/divider',
    frontmatter: dividerFrontmatter,
    meta: {
      title: 'Divider Component in Cerberus Design System',
      description:
        'Explore the Divider component in the Cerberus Design System for creating visual separation between elements.',
    },
    Content: Divider,
  },
  {
    id: '1.2.6',
    label: 'Flex',
    slug: 'flex',
    href: '/docs/components/flex',
    frontmatter: flexFrontmatter,
    meta: {
      title: 'Flex Component in Cerberus Design System',
      description:
        'Discover how to use the Flex component in the Cerberus Design System for flexible and responsive layouts.',
    },
    Content: Flex,
  },
  {
    id: '1.2.7',
    label: 'Float',
    slug: 'float',
    href: '/docs/components/float',
    frontmatter: floatFrontmatter,
    meta: {
      title: 'Float Component in Cerberus Design System',
      description:
        'Learn how to use the Float component in the Cerberus Design System to create layouts with floating elements.',
    },
    Content: Float,
  },
  {
    id: '1.2.8',
    label: 'Grid',
    slug: 'grid',
    href: '/docs/components/grid',
    frontmatter: gridFrontmatter,
    meta: {
      title: 'Grid Component in Cerberus Design System',
      description:
        'Explore the Grid component in the Cerberus Design System for creating complex and responsive grid layouts.',
    },
    Content: Grid,
  },
  {
    id: '1.2.9',
    label: 'Link Overlay',
    slug: 'link-overlay',
    href: '/docs/components/link-overlay',
    frontmatter: linkOverlayFrontmatter,
    meta: {
      title: 'Link Overlay Component in Cerberus Design System',
      description:
        'Learn how to use the Link Overlay component in the Cerberus Design System to create clickable overlays.',
    },
    Content: LinkOverlay,
  },
  {
    id: '1.2.12',
    label: 'Scrollable',
    slug: 'scrollable',
    href: '/docs/components/scrollable',
    frontmatter: scrollableFrontmatter,
    meta: {
      title: 'Scrollable Component in Cerberus Design System',
      description:
        'Explore the Scrollable component in the Cerberus Design System for creating scrollable areas within layouts.',
    },
    Content: Scrollable,
  },
  {
    id: '1.2.10',
    label: 'Stack',
    slug: 'stack',
    href: '/docs/components/stack',
    frontmatter: stackFrontmatter,
    meta: {
      title: 'Stack Component in Cerberus Design System',
      description:
        'Discover how to use the Stack component in the Cerberus Design System for vertical and horizontal stacking of elements.',
    },
    Content: Stack,
  },
  {
    id: '1.2.11',
    label: 'Wrap',
    slug: 'wrap',
    href: '/docs/components/wrap',
    frontmatter: wrapFrontmatter,
    meta: {
      title: 'Wrap Component in Cerberus Design System',
      description:
        'Learn how to use the Wrap component in the Cerberus Design System to create responsive wrapping layouts.',
    },
    Content: Wrap,
  },
]
