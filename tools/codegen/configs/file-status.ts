import { fileStatusAnatomy } from '@cerberus/panda-preset'
import { defineComponent } from '../manifest'

export const fileStatusConfig = defineComponent({
  key: 'file-status',
  // Cerberus-only: the layers of the status card, styled by the `fileStatus`
  // slot recipe. The progress bar and action button are other components, so
  // they are abstractions (`Progress`, `Action`), not recipe slots
  anatomy: fileStatusAnatomy,
  recipe: 'fileStatus',
  // Documented on the file uploader page, next to FileUpload
  docsSlug: 'file-uploader',
  types: [
    'FileStatusRootProps',
    'FileStatusIconProps',
    'FileStatusInfoProps',
    'FileStatusNameProps',
    'FileStatusStatusTextProps',
  ],
  parts: {
    root: {
      description:
        'The card: a row with the status icon, the info column and the action button.',
    },
    icon: {
      description: 'Holds the status icon (an Avatar with a status gradient).',
    },
    info: {
      description:
        'The column with the file name, progress bar and status text.',
    },
    name: { description: 'The file name, as a `<small>`.' },
    statusText: {
      description:
        'The status text, e.g. "50% Complete" or "File uploaded successfully".',
    },
  },
  description: `
The FileStatus component shows the status of a file during processing: the status icon, the file name, its progress and status text, and an action button that cancels, retries or deletes the file.

\`<FileStatus>\` renders the whole card from \`file\`, \`now\` and \`status\` (\`processStatus.TODO\`, \`PROCESSING\`, \`DONE\` or \`ERROR\`) and calls \`onClick\` with the action for the status. Direct part children override that part, e.g. \`<FileStatus.Action aria-describedby="…" />\` or \`<FileStatus.StatusText>Envoyé</FileStatus.StatusText>\`, or compose the primitives for full structural control.
  `,
  abstractions: [
    {
      name: 'El',
      file: 'file-status',
      description:
        'Renders the status icon, file name, progress bar, status text and action button for `status`; direct part children override that part, other children render at the end of the info column',
      types: ['FileStatusProps', 'FileBaseStatusProps'],
      isDefaultExport: true,
    },
    {
      name: 'Progress',
      file: 'progress',
      description:
        'A small `ProgressBar` labelled "File upload status"; `id`, `label` and `now` are optional',
      types: ['FileStatusProgressProps'],
    },
    {
      name: 'Action',
      file: 'action',
      description:
        'An IconButton that cancels (`todo`, `processing`), retries (`error`) or deletes (`done`), with the matching icon, label and palette',
      types: ['FileStatusActionProps'],
    },
  ],
  exports: [
    {
      from: './status',
      values: ['processStatus'],
      types: ['FileStatusKey', 'FileStatusActions'],
    },
  ],
})
