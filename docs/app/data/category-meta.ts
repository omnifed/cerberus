import dynamic from 'next/dynamic'

const ButtonFeature = dynamic(() => import('@/app/assets/button-feature'))

export const categoryMeta = {
  accordion: {
    name: 'Accordion',
    description: 'Accordions are used to display collapsible content.',
    image: ButtonFeature,
  },
  admonition: {
    name: 'Admonition',
    description:
      'Admonitions are used to provide additional information or context.',
    image: ButtonFeature,
  },
  avatar: {
    name: 'Avatar',
    description: 'Avatars are used to represent users or entities.',
    image: ButtonFeature,
  },
  button: {
    name: 'Button',
    description: 'Buttons are used to trigger actions or events.',
    image: ButtonFeature,
  },
  'icon-button': {
    name: 'Icon Button',
    description: 'Icon buttons are used to trigger actions or events.',
    image: ButtonFeature,
  },
  notifications: {
    name: 'Notifications',
    description:
      'Notifications are used to alert users of important information.',
    image: ButtonFeature,
  },
  'progress-indicators': {
    name: 'Progress Indicators',
    description:
      'Progress indicators are used to show the status of an ongoing process.',
    image: ButtonFeature,
  },
  tag: {
    name: 'Tag',
    description: 'Tags are used to categorize or label content.',
    image: ButtonFeature,
  },
  tooltip: {
    name: 'Tooltip',
    description: 'Tooltips are used to provide additional information.',
    image: ButtonFeature,
  },
  table: {
    name: 'Table',
    description: 'Tables are used to display data in a structured format.',
    image: ButtonFeature,
  },

  'confirm-modal': {
    name: 'Confirm Modal',
    description: 'Confirm modals are used to confirm an action.',
    image: ButtonFeature,
  },
  'prompt-modal': {
    name: 'Prompt Modal',
    description: 'Prompt modals are used to collect user input.',
    image: ButtonFeature,
  },
  'cta-modal': {
    name: 'CTA Modal',
    description: 'CTA modals are used to promote a specific action.',
    image: ButtonFeature,
  },
  dialog: {
    name: 'Dialog',
    description: 'Dialogs are used to display content on top of an overlay.',
    image: ButtonFeature,
  },
  modal: {
    name: 'Modal',
    description: 'Modals are used to display content on top of an overlay.',
    image: ButtonFeature,
  },

  menu: {
    name: 'Menu',
    description: 'Menus are used to display a list of options.',
    image: ButtonFeature,
  },
  tabs: {
    name: 'Tabs',
    description: 'Tabs are used to navigate between different sections.',
    image: ButtonFeature,
  },

  'drag-&-drop': {
    name: 'Drag & Drop',
    description: 'Drag & drop is used to move items between locations.',
    image: ButtonFeature,
  },
  checkbox: {
    name: 'Checkbox',
    description: 'Checkboxes are used to select multiple options.',
    image: ButtonFeature,
  },
  'date-picker': {
    name: 'Date Picker',
    description: 'Date pickers are used to select a date.',
    image: ButtonFeature,
  },
  radio: {
    name: 'Radio',
    description: 'Radio buttons are used to select a single option.',
    image: ButtonFeature,
  },
  select: {
    name: 'Select',
    description: 'Selects are used to choose from a list of options.',
    image: ButtonFeature,
  },
  toggle: {
    name: 'Toggle',
    description: 'Toggles are used to switch between two states.',
    image: ButtonFeature,
  },

  field: {
    name: 'Field',
    description: 'Fields are used to collect user input.',
    image: ButtonFeature,
  },
  input: {
    name: 'Input',
    description: 'Inputs are used to collect user input.',
    image: ButtonFeature,
  },
  textarea: {
    name: 'Textarea',
    description: 'Textareas are used to collect multi-line user input.',
    image: ButtonFeature,
  },
  label: {
    name: 'Label',
    description: 'Labels are used to describe form inputs.',
    image: ButtonFeature,
  },
  fieldset: {
    name: 'Fieldset',
    description: 'Fieldsets are used to group related form inputs.',
    image: ButtonFeature,
  },
  'field-message': {
    name: 'Field Message',
    description: 'Field messages are used to provide feedback.',
    image: ButtonFeature,
  },
  'file-uploader': {
    name: 'File Uploader',
    description: 'File uploaders are used to upload files.',
    image: ButtonFeature,
  },
}
