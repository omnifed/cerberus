# FileStatus API reference

The FileStatus component shows the status of a file during processing: the status icon, the file name, its progress and status text, and an action button that cancels, retries or deletes the file.

`<FileStatus>` renders the whole card from `file`, `now` and `status` (`processStatus.TODO`, `PROCESSING`, `DONE` or `ERROR`) and calls `onClick` with the action for the status. Direct part children override that part, e.g. `<FileStatus.Action aria-describedby="…" />` or `<FileStatus.StatusText>Envoyé</FileStatus.StatusText>`, or compose the primitives for full structural control.

Import: `import { FileStatus } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### FileStatus.El (abstraction)

Renders the status icon, file name, progress bar, status text and action button for `status`; direct part children override that part, other children render at the end of the info column

Also accepts all props of `FileStatus.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | Yes | — | A unique identifier for the file status. Required for accessibility. |
| `file` | `string` | Yes | — | The name of the file. |
| `now` | `number` | Yes | — | The percentage of the file that has been processed. |
| `status` | `processStatus \| FileStatusKey` | Yes | — | The status of the file. |
| `onClick` | `(status: FileStatusActions, e: MouseEvent<HTMLButtonElement>) => void` | Yes | — | Called when a user clicks the action button at the end of the card, with the action for the current status: `cancel`, `retry` or `delete`. |

### FileStatus.Progress (abstraction)

A small `ProgressBar` labelled "File upload status"; `id`, `label` and `now` are optional

Also accepts all props of `ProgressBar.Root` (progress).

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | A unique identifier for the progress bar. Generated when omitted. |
| `label` | `string` | No | `'File upload status'` | The progress bar's accessible label. |
| `now` | `number` | No | `0` | The percentage processed. |
| `indeterminate` | `boolean` | No | — | Shows an indeterminate bar instead of `now`. |

### FileStatus.Action (abstraction)

An IconButton that cancels (`todo`, `processing`), retries (`error`) or deletes (`done`), with the matching icon, label and palette

Also accepts all props of `Button.IconButtonRoot` (buttons).

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `status` | `FileStatusKey` | No | `'todo'` | The status the action applies to: it picks the default icon, label and palette. `<FileStatus>` supplies it to a patch child. |
| `ariaLabel` | `string` | No | — | The accessible label. Defaults to "Cancel", "Retry" or "Delete" for the status. |
| `children` | `ReactNode` | No | — | The icon. Defaults to the Cerberus `close`, `redo` or `delete` icon for the status. |

### FileStatus.Root (primitive)

The card: a row with the status icon, the info column and the action button.

Selector: `[data-scope="file-status"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileStatus.Icon (primitive)

Holds the status icon (an Avatar with a status gradient).

Selector: `[data-scope="file-status"][data-part="icon"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileStatus.Info (primitive)

The column with the file name, progress bar and status text.

Selector: `[data-scope="file-status"][data-part="info"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileStatus.Name (primitive)

The file name, as a `<small>`.

Selector: `[data-scope="file-status"][data-part="name"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileStatus.StatusText (primitive)

The status text, e.g. "50% Complete" or "File uploaded successfully".

Selector: `[data-scope="file-status"][data-part="status-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
