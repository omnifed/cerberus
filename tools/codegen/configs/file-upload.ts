import { fileUploadAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const fileUploadConfig = defineComponent({
  key: 'file-upload',
  // The recipe and the docs page kept the v1 `FileUploader` name
  recipe: 'fileUploader',
  docsSlug: 'file-uploader',
  anatomy: fileUploadAnatomy,
  description: `
The FileUpload component lets users select files with a dropzone (click, \`Enter\`/\`Space\` or drag and drop) and lists the accepted files.

Use the default \`<FileUpload>\` (also available as \`FileUploader\`) with an \`accept\` and an optional \`heading\` to render the dropzone with the Cerberus icon, an "Import <types> files" text and a description, the list of accepted files with image previews, and the hidden input, or compose the primitives for full structural control. Render the file list on its own with \`FileUpload.ItemGroupWithPreview\` (also available as \`ImgPreview\`), and show the progress of a file's upload with the separate \`FileStatus\` compound (\`@cerberus/react/file-status\`). Map the error codes of rejected files to messages with \`createErrorMessages\`.
  `,

  // Ark's parts own the bare names. The v1 `FileUploader` (the dropzone with
  // its icon, heading, "Import … files" text and description, the file list
  // and the hidden input) becomes `El`, kept as a `FileUploader` alias. The
  // v1 `ImgPreview` (an item group with one item per accepted file) becomes
  // `ItemGroupWithPreview`, like `Select.ItemGroupWithLabel`: it is an item
  // group and its props go to the group, and not every item has an image
  abstractions: [
    {
      name: 'El',
      file: 'file-upload',
      description:
        'An abstraction of the root that renders the dropzone with the Cerberus icon, an optional heading, an "Import <types> files" text and a description, the accepted files with their previews, and the hidden input',
      isDefaultExport: true,
      types: ['FileUploadProps'],
    },
    {
      name: 'ItemGroupWithPreview',
      file: 'item-group-with-preview',
      description:
        'An abstraction of the item group that renders an item per accepted file with its image preview, name, size and a Cerberus delete trigger',
      types: ['FileUploadItemGroupWithPreviewProps'],
    },
  ],

  // `HiddenInput` has no recipe slot. Not exported in v1: a styled
  // `RootProvider` for `useFileUpload()` state (index.client re-exported Ark's
  // raw, unstyled one) and `FileUpload.Context` render props. Ark has no
  // `ItemContext` for file upload
  arkMembers: ['HiddenInput', 'RootProvider', 'Context'],

  // Cerberus slots of the `fileUploader` recipe, outside Ark's anatomy. The v1
  // `FileUploadContent` (a div with the `label` slot) is now internal to `El`
  elementParts: { icon: 'div', heading: 'p', description: 'p' },

  exports: [
    // v1 names, kept as aliases of the abstractions
    {
      from: './file-upload',
      values: ['FileUploader'],
      types: ['FileUploaderProps'],
    },
    { from: './item-group-with-preview', values: ['ImgPreview'] },
    { from: './helpers', values: ['createErrorMessages'] },
    // v1 re-exported `UseFileUploadContext`. New: the details types of the
    // change callbacks and the error codes `createErrorMessages` maps
    {
      from: '@ark-ui/react/file-upload',
      types: [
        'UseFileUploadContext',
        'FileUploadFileAcceptDetails',
        'FileUploadFileChangeDetails',
        'FileUploadFileRejectDetails',
        'FileUploadFileError',
      ],
    },
  ],

  // @zag-js/docs has no file-upload entry, and the dropzone's keys live in an
  // `onKeyDown` handler rather than a `keyMap`, so they aren't detected
  a11y: {
    keyboard: [
      {
        key: 'Enter',
        description:
          'When focus is on the dropzone, opens the file picker (unless `disableClick` is set on the dropzone).',
      },
      {
        key: 'Space',
        description:
          'When focus is on the dropzone, opens the file picker (unless `disableClick` is set on the dropzone).',
      },
    ],
    notes: [
      '`FileUpload.Dropzone` renders a focusable `role="button"` element (`role="application"` with `disableClick`) labelled "dropzone" by default; set its `aria-label` through the root\'s `translations.dropzone`.',
      'The hidden file input is removed from the accessibility tree (`aria-hidden`); the dropzone and `FileUpload.Trigger` are the accessible ways to open the file picker.',
      'Each `FileUpload.ItemDeleteTrigger` is labelled "delete file <name>" and each preview image has the alt text "preview of <name>" by default (`translations.deleteFile` and `translations.itemPreview`).',
    ],
  },
})
