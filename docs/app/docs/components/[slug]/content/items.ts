import Overview, { frontmatter as overviewFrontmatter } from './overview.mdx'
import Composition from './composition.mdx'
import Testing from './testing.mdx'

// Layout components
import AspectRatio, {
  frontmatter as aspectRatioFrontmatter,
} from './aspect-ratio.mdx'
import Bleed, { frontmatter as bleedFrontmatter } from './bleed.mdx'
import Box, { frontmatter as boxFrontmatter } from './box.mdx'
import Center, { frontmatter as centerFrontmatter } from './center.mdx'
import Container, { frontmatter as containerFrontmatter } from './container.mdx'
import Divider, { frontmatter as dividerFrontmatter } from './divider.mdx'
import Flex, { frontmatter as flexFrontmatter } from './flex.mdx'
import Float, { frontmatter as floatFrontmatter } from './float.mdx'
import Grid, { frontmatter as gridFrontmatter } from './grid.mdx'
import LinkOverlay, {
  frontmatter as linkOverlayFrontmatter,
} from './link-overlay.mdx'
import Stack, { frontmatter as stackFrontmatter } from './stack.mdx'
import Wrap, { frontmatter as wrapFrontmatter } from './wrap.mdx'

// Components
import Accordion, { frontmatter as accordionFrontmatter } from './accordion.mdx'
import Admonition, {
  frontmatter as admonitionFrontmatter,
} from './admonition.mdx'
import Avatar, { frontmatter as avatarFrontmatter } from './avatar.mdx'
import Button, { frontmatter as buttonFrontmatter } from './button.mdx'
import Checkbox, { frontmatter as checkboxFrontmatter } from './checkbox.mdx'
import Combobox, { frontmatter as comboboxFrontmatter } from './combobox.mdx'
import ConfirmModal, {
  frontmatter as confirmModalFrontmatter,
} from './confirm-modal.mdx'
import CTAModal, { frontmatter as ctaModalFrontmatter } from './cta-modal.mdx'

export const items = [
  {
    id: '1.1',
    label: 'Concepts',
    href: '',
  },
  {
    id: '1.1.1',
    label: 'Overview',
    slug: 'overview',
    href: '/docs/components/overview',
    frontmatter: overviewFrontmatter,
    meta: {
      title: 'Overview of Cerberus Design System',
      description:
        'Get an overview of the Cerberus Design System, its components, and how to use them effectively.',
    },
    Content: Overview,
  },
  {
    id: '1.1.2',
    label: 'Composition',
    slug: 'composition',
    href: '/docs/components/composition',
    meta: {
      title: 'Composition in Cerberus Design System',
      description:
        'Learn about the composition of components in the Cerberus Design System, including how to combine them effectively.',
    },
    Content: Composition,
  },
  {
    id: '1.1.3',
    label: 'Testing',
    slug: 'testing',
    href: '/docs/components/testing',
    meta: {
      title: 'Testing Components in Cerberus Design System',
      description:
        'Understand how to test components in the Cerberus Design System, ensuring reliability and performance.',
    },
    Content: Testing,
  },
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
  {
    id: '1.3',
    label: 'Components',
    href: '',
  },
  {
    id: '1.3.1',
    label: 'Accordion',
    slug: 'accordion',
    href: '/docs/components/accordion',
    frontmatter: accordionFrontmatter,
    meta: {
      title: 'Accordion Component in Cerberus Design System',
      description:
        'Discover how to use the Accordion component in the Cerberus Design System for collapsible content sections.',
    },
    Content: Accordion,
  },
  {
    id: '1.3.3',
    label: 'Admonition',
    slug: 'admonition',
    href: '/docs/components/admonition',
    frontmatter: admonitionFrontmatter,
    meta: {
      title: 'Admonition Component in Cerberus Design System',
      description:
        'Explore the Admonition component in the Cerberus Design System for displaying important messages and alerts.',
    },
    Content: Admonition,
  },
  {
    id: '1.3.4',
    label: 'Avatar',
    slug: 'avatar',
    href: '/docs/components/avatar',
    frontmatter: avatarFrontmatter,
    meta: {
      title: 'Avatar Component in Cerberus Design System',
      description:
        'Discover how to use the Avatar component in the Cerberus Design System for displaying user profile images.',
    },
    Content: Avatar,
  },
  {
    id: '1.3.2',
    label: 'Button',
    slug: 'button',
    href: '/docs/components/button',
    frontmatter: buttonFrontmatter,
    meta: {
      title: 'Button Component in Cerberus Design System',
      description:
        'Learn how to use the Button component in the Cerberus Design System, including its properties and examples.',
    },
    Content: Button,
  },
  {
    id: '1.3.5',
    label: 'Checkbox',
    slug: 'checkbox',
    href: '/docs/components/checkbox',
    frontmatter: checkboxFrontmatter,
    meta: {
      title: 'Checkbox Component in Cerberus Design System',
      description:
        'Explore the Checkbox component in the Cerberus Design System for creating interactive checkboxes.',
    },
    Content: Checkbox,
  },
  {
    id: '1.3.6',
    label: 'Combobox',
    slug: 'combobox',
    href: '/docs/components/combobox',
    frontmatter: comboboxFrontmatter,
    meta: {
      title: 'Combobox Component in Cerberus Design System',
      description:
        'Learn how to use the Combobox component in the Cerberus Design System for creating searchable dropdowns.',
    },
    Content: Combobox,
  },
  {
    id: '1.3.7',
    label: 'Confirm Modal',
    slug: 'confirm-modal',
    href: '/docs/components/confirm-modal',
    frontmatter: confirmModalFrontmatter,
    meta: {
      title: 'Confirm Modal Component in Cerberus Design System',
      description:
        'Discover how to use the Confirm Modal component in the Cerberus Design System for confirmation dialogs.',
    },
    Content: ConfirmModal,
  },
  {
    id: '1.3.8',
    label: 'CTAModal',
    slug: 'cta-modal',
    href: '/docs/components/cta-modal',
    frontmatter: ctaModalFrontmatter,
    meta: {
      title: 'CTAModal Component in Cerberus Design System',
      description:
        'Learn how to use the CTAModal component in the Cerberus Design System for call-to-action modals.',
    },
    Content: CTAModal,
  },
  {
    id: '1.4',
    label: 'Utilities',
    href: '',
  },
]
