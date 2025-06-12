import Accordion, {
  frontmatter as accordionFrontmatter,
} from '../accordion.mdx'
import Admonition, {
  frontmatter as admonitionFrontmatter,
} from '../admonition.mdx'
import Avatar, { frontmatter as avatarFrontmatter } from '../avatar.mdx'
import Button, { frontmatter as buttonFrontmatter } from '../button.mdx'
import Checkbox, { frontmatter as checkboxFrontmatter } from '../checkbox.mdx'
import Combobox, { frontmatter as comboboxFrontmatter } from '../combobox.mdx'
import ConfirmModal, {
  frontmatter as confirmModalFrontmatter,
} from '../confirm-modal.mdx'
import CTAModal, { frontmatter as ctaModalFrontmatter } from '../cta-modal.mdx'
import DatePicker, {
  frontmatter as datePickerFrontmatter,
} from '../date-picker.mdx'
import Dialog, { frontmatter as dialogFrontmatter } from '../dialog.mdx'
import Field, { frontmatter as fieldFrontmatter } from '../field.mdx'
import Fieldset, { frontmatter as fieldsetFrontmatter } from '../fieldset.mdx'
import FileUploader, {
  frontmatter as fileUploaderFrontmatter,
} from '../file-uploader.mdx'
import IconButton, {
  frontmatter as iconButtonFrontmatter,
} from '../icon-button.mdx'
import Input, { frontmatter as inputFrontmatter } from '../input.mdx'
import LoadingStates, {
  frontmatter as loadingStatesFrontmatter,
} from '../loading-states.mdx'
import Menu, { frontmatter as menuFrontmatter } from '../menu.mdx'
import Notifications, {
  frontmatter as notificationsFrontmatter,
} from '../notifications.mdx'
import Progress, { frontmatter as progressFrontmatter } from '../progress.mdx'
import PromptModal, {
  frontmatter as promptModalFrontmatter,
} from '../prompt-modal.mdx'
import Radio, { frontmatter as radioFrontmatter } from '../radio.mdx'
import Rating, { frontmatter as ratingFrontmatter } from '../rating.mdx'
import Select, { frontmatter as selectFrontmatter } from '../select.mdx'
import Switch, { frontmatter as switchFrontmatter } from '../switch.mdx'
import Table, { frontmatter as tableFrontmatter } from '../table.mdx'
import Tabs, { frontmatter as tabsFrontmatter } from '../tabs.mdx'
import Tag, { frontmatter as tagFrontmatter } from '../tag.mdx'
import Text, { frontmatter as textFrontmatter } from '../text.mdx'
import Textarea, { frontmatter as textareaFrontmatter } from '../textarea.mdx'
import Toggle, { frontmatter as toggleFrontmatter } from '../toggle.mdx'
import Tooltip, { frontmatter as tooltipFrontmatter } from '../tooltip.mdx'

export const components = [
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
    id: '1.3.9',
    label: 'Date Picker',
    slug: 'date-picker',
    href: '/docs/components/date-picker',
    frontmatter: datePickerFrontmatter,
    meta: {
      title: 'Date Picker Component in Cerberus Design System',
      description:
        'Explore the Date Picker component in the Cerberus Design System for selecting dates in forms.',
    },
    Content: DatePicker,
  },
  {
    id: '1.3.10',
    label: 'Dialog',
    slug: 'dialog',
    href: '/docs/components/dialog',
    frontmatter: dialogFrontmatter,
    meta: {
      title: 'Dialog Component in Cerberus Design System',
      description:
        'Discover how to use the Dialog component in the Cerberus Design System for modal dialogs.',
    },
    Content: Dialog,
  },
  {
    id: '1.3.11',
    label: 'Field',
    slug: 'field',
    href: '/docs/components/field',
    frontmatter: fieldFrontmatter,
    meta: {
      title: 'Field Component in Cerberus Design System',
      description:
        'Learn how to use the Field component in the Cerberus Design System for form fields and labels.',
    },
    Content: Field,
  },
  {
    id: '1.3.12',
    label: 'Fieldset',
    slug: 'fieldset',
    href: '/docs/components/fieldset',
    frontmatter: fieldsetFrontmatter,
    meta: {
      title: 'Fieldset Component in Cerberus Design System',
      description:
        'Explore the Fieldset component in the Cerberus Design System for grouping form fields.',
    },
    Content: Fieldset,
  },
  {
    id: '1.3.13',
    label: 'File Uploader',
    slug: 'file-uploader',
    href: '/docs/components/file-uploader',
    frontmatter: fileUploaderFrontmatter,
    meta: {
      title: 'File Uploader Component in Cerberus Design System',
      description:
        'Learn how to use the File Uploader component in the Cerberus Design System for uploading files in forms.',
    },
    Content: FileUploader,
  },
  {
    id: '1.3.14',
    label: 'Icon Button',
    slug: 'icon-button',
    href: '/docs/components/icon-button',
    frontmatter: iconButtonFrontmatter,
    meta: {
      title: 'Icon Button Component in Cerberus Design System',
      description:
        'Discover how to use the Icon Button component in the Cerberus Design System for clickable icons.',
    },
    Content: IconButton,
  },
  {
    id: '1.3.15',
    label: 'Input',
    slug: 'input',
    href: '/docs/components/input',
    frontmatter: inputFrontmatter,
    meta: {
      title: 'Input Component in Cerberus Design System',
      description:
        'Learn how to use the Input component in the Cerberus Design System for text input fields.',
    },
    Content: Input,
  },
  {
    id: '1.3.31',
    label: 'Loading States',
    slug: 'loading-states',
    href: '/docs/components/loading-states',
    frontmatter: loadingStatesFrontmatter,
    meta: {
      title: 'Loading States in Cerberus Design System',
      description:
        'Explore how to implement loading states in the Cerberus Design System for better user experience.',
    },
    Content: LoadingStates,
  },
  {
    id: '1.3.16',
    label: 'Menu',
    slug: 'menu',
    href: '/docs/components/menu',
    frontmatter: menuFrontmatter,
    meta: {
      title: 'Menu Component in Cerberus Design System',
      description:
        'Explore the Menu component in the Cerberus Design System for creating dropdown menus.',
    },
    Content: Menu,
  },
  {
    id: '1.3.17',
    label: 'Notifications',
    slug: 'notifications',
    href: '/docs/components/notifications',
    frontmatter: notificationsFrontmatter,
    meta: {
      title: 'Notifications Component in Cerberus Design System',
      description:
        'Discover how to use the Notifications component in the Cerberus Design System for displaying alerts and messages.',
    },
    Content: Notifications,
  },
  {
    id: '1.3.18',
    label: 'Progress',
    slug: 'progress',
    href: '/docs/components/progress',
    frontmatter: progressFrontmatter,
    meta: {
      title: 'Progress Component in Cerberus Design System',
      description:
        'Learn how to use the Progress component in the Cerberus Design System for displaying progress indicators.',
    },
    Content: Progress,
  },
  {
    id: '1.3.19',
    label: 'Prompt Modal',
    slug: 'prompt-modal',
    href: '/docs/components/prompt-modal',
    frontmatter: promptModalFrontmatter,
    meta: {
      title: 'Prompt Modal Component in Cerberus Design System',
      description:
        'Explore how to use the Prompt Modal component in the Cerberus Design System for user prompts and confirmations.',
    },
    Content: PromptModal,
  },
  {
    id: '1.3.20',
    label: 'Radio',
    slug: 'radio',
    href: '/docs/components/radio',
    frontmatter: radioFrontmatter,
    meta: {
      title: 'Radio Component in Cerberus Design System',
      description:
        'Discover how to use the Radio component in the Cerberus Design System for selecting options in forms.',
    },
    Content: Radio,
  },
  {
    id: '1.3.21',
    label: 'Rating',
    slug: 'rating',
    href: '/docs/components/rating',
    frontmatter: ratingFrontmatter,
    meta: {
      title: 'Rating Component in Cerberus Design System',
      description:
        'Learn how to use the Rating component in the Cerberus Design System for star ratings and reviews.',
    },
    Content: Rating,
  },
  {
    id: '1.3.22',
    label: 'Select',
    slug: 'select',
    href: '/docs/components/select',
    frontmatter: selectFrontmatter,
    meta: {
      title: 'Select Component in Cerberus Design System',
      description:
        'Explore the Select component in the Cerberus Design System for creating dropdown selections.',
    },
    Content: Select,
  },
  {
    id: '1.3.23',
    label: 'Switch',
    slug: 'switch',
    href: '/docs/components/switch',
    frontmatter: switchFrontmatter,
    meta: {
      title: 'Switch Component in Cerberus Design System',
      description:
        'Discover how to use the Switch component in the Cerberus Design System for toggle switches.',
    },
    Content: Switch,
  },
  {
    id: '1.3.24',
    label: 'Table',
    slug: 'table',
    href: '/docs/components/table',
    frontmatter: tableFrontmatter,
    meta: {
      title: 'Table Component in Cerberus Design System',
      description:
        'Learn how to use the Table component in the Cerberus Design System for displaying tabular data.',
    },
    Content: Table,
  },
  {
    id: '1.3.25',
    label: 'Tabs',
    slug: 'tabs',
    href: '/docs/components/tabs',
    frontmatter: tabsFrontmatter,
    meta: {
      title: 'Tabs Component in Cerberus Design System',
      description:
        'Explore the Tabs component in the Cerberus Design System for organizing content into tabbed interfaces.',
    },
    Content: Tabs,
  },
  {
    id: '1.3.26',
    label: 'Tag',
    slug: 'tag',
    href: '/docs/components/tag',
    frontmatter: tagFrontmatter,
    meta: {
      title: 'Tag Component in Cerberus Design System',
      description:
        'Discover how to use the Tag component in the Cerberus Design System for labeling and categorizing content.',
    },
    Content: Tag,
  },
  {
    id: '1.3.27',
    label: 'Text',
    slug: 'text',
    href: '/docs/components/text',
    frontmatter: textFrontmatter,
    meta: {
      title: 'Text Component in Cerberus Design System',
      description:
        'Learn how to use the Text component in the Cerberus Design System for displaying text content.',
    },
    Content: Text,
  },
  {
    id: '1.3.28',
    label: 'Textarea',
    slug: 'textarea',
    href: '/docs/components/textarea',
    frontmatter: textareaFrontmatter,
    meta: {
      title: 'Textarea Component in Cerberus Design System',
      description:
        'Explore the Textarea component in the Cerberus Design System for multi-line text input fields.',
    },
    Content: Textarea,
  },
  {
    id: '1.3.29',
    label: 'Toggle',
    slug: 'toggle',
    href: '/docs/components/toggle',
    frontmatter: toggleFrontmatter,
    meta: {
      title: 'Toggle Component in Cerberus Design System',
      description:
        'Discover how to use the Toggle component in the Cerberus Design System for binary state toggles.',
    },
    Content: Toggle,
  },
  {
    id: '1.3.30',
    label: 'Tooltip',
    slug: 'tooltip',
    href: '/docs/components/tooltip',
    frontmatter: tooltipFrontmatter,
    meta: {
      title: 'Tooltip Component in Cerberus Design System',
      description:
        'Learn how to use the Tooltip component in the Cerberus Design System for providing additional information on hover.',
    },
    Content: Tooltip,
  },
]
