# FileUpload API reference

The FileUpload component lets users select files with a dropzone (click, `Enter`/`Space` or drag and drop) and lists the accepted files.

Use the default `<FileUpload>` (also available as `FileUploader`) with an `accept` and an optional `heading` to render the dropzone with the Cerberus icon, an "Import <types> files" text and a description, the list of accepted files with image previews, and the hidden input, or compose the primitives for full structural control. Render the file list on its own with `FileUpload.ItemGroupWithPreview` (also available as `ImgPreview`), and show the progress of a file's upload with the separate `FileStatus` component. Map the error codes of rejected files to messages with `createErrorMessages`.

Import: `import { FileUpload } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### FileUpload.El (abstraction)

An abstraction of the root that renders the dropzone with the Cerberus icon, an optional heading, an "Import <types> files" text and a description, the accepted files with their previews, and the hidden input

Also accepts all props of `FileUpload.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `heading` | `ReactNode` | No | — | The optional heading to display in the dropzone. |
| `showPreview` | `boolean` | No | `true` | Show the accepted files with a preview of their images. |

### FileUpload.ItemGroupWithPreview (abstraction)

An abstraction of the item group that renders an item per accepted file with its image preview, name, size and a Cerberus delete trigger

Also accepts all props of `FileUpload.ItemGroup`.

### FileUpload.Root (primitive)

The root container of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `locale` | `string` | No | `"en-US"` | The current locale. Based on the BCP 47 definition. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `name` | `string` | No | — | The name of the underlying file input |
| `ids` | `ElementIds` | No | — | The ids of the elements. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | The localized messages to use. |
| `accept` | `Record<string, string[]> \| FileMimeType \| FileMimeType[]` | No | — | The accept file types |
| `disabled` | `boolean` | No | — | Whether the file input is disabled |
| `required` | `boolean` | No | — | Whether the file input is required |
| `allowDrop` | `boolean` | No | `true` | Whether to allow drag and drop in the dropzone element |
| `maxFileSize` | `number` | No | `Infinity` | The maximum file size in bytes |
| `minFileSize` | `number` | No | `0` | The minimum file size in bytes |
| `maxFiles` | `number` | No | `1` | The maximum number of files |
| `preventDocumentDrop` | `boolean` | No | `true` | Whether to prevent the drop event on the document |
| `validate` | `((file: File, details: FileValidateDetails) => FileError[] \| null)` | No | — | Function to validate a file |
| `defaultAcceptedFiles` | `File[]` | No | `[]` | The default accepted files when rendered. Use when you don't need to control the accepted files of the input. |
| `acceptedFiles` | `File[]` | No | — | The controlled accepted files |
| `onFileChange` | `((details: FileChangeDetails) => void)` | No | — | Function called when the value changes, whether accepted or rejected |
| `onFileAccept` | `((details: FileAcceptDetails) => void)` | No | — | Function called when the file is accepted |
| `onFileReject` | `((details: FileRejectDetails) => void)` | No | — | Function called when the file is rejected |
| `capture` | `"user" \| "environment"` | No | — | The default camera to use when capturing media |
| `directory` | `boolean` | No | — | Whether to accept directories, only works in webkit browsers |
| `invalid` | `boolean` | No | — | Whether the file input is invalid |
| `readOnly` | `boolean` | No | — | Whether the file input is read-only |
| `transformFiles` | `((files: File[]) => Promise<File[]>)` | No | — | Function to transform the accepted files to apply transformations |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-dragging` | Present when in the dragging state. |

### FileUpload.Dropzone (primitive)

The dropzone primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="dropzone"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `disableClick` | `boolean` | No | — | Whether to disable the click event on the dropzone |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-dragging` | Present when in the dragging state. |

### FileUpload.Item (primitive)

The item primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `file` | `File` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.ItemDeleteTrigger (primitive)

The item delete trigger primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-delete-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-type` | The type of the item. |

### FileUpload.ItemGroup (primitive)

The item group primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `type` | `ItemType` | No | — |  |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.ItemName (primitive)

The item name primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-name"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.ItemPreview (primitive)

The item preview primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-preview"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `type` | `string` | No | `'.*'` | The file type to match against. Matches all file types by default. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.ItemPreviewImage (primitive)

The item preview image primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-preview-image"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.ItemSizeText (primitive)

The item size text primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="item-size-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-type` | The type of the item. |

### FileUpload.Label (primitive)

The label primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### FileUpload.Trigger (primitive)

The trigger primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-invalid` | Present when invalid. |

### FileUpload.ClearTrigger (primitive)

The clear trigger primitive part of the FileUpload component.

Selector: `[data-scope="file-upload"][data-part="clear-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |

### FileUpload.Icon (primitive)

The icon part of the FileUpload component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="file-upload"][data-part="icon"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileUpload.Heading (primitive)

The heading part of the FileUpload component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<p>`.

Selector: `[data-scope="file-upload"][data-part="heading"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileUpload.Description (primitive)

The description part of the FileUpload component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<p>`.

Selector: `[data-scope="file-upload"][data-part="description"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileUpload.HiddenInput (primitive)

The hidden input primitive part of the FileUpload component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### FileUpload.RootProvider (primitive)

The root container of the FileUpload component, driven by state created with `useFileUpload()`.

Selector: `[data-scope="file-upload"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseFileUploadReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-dragging` | Present when in the dragging state. |

### FileUpload.Context (primitive)

Exposes the FileUpload state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseFileUploadContext) => ReactNode` | Yes | — |  |

## Context API

`FileUpload.Context` and `useFileUpload()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `dragging` | `boolean` | Whether the user is dragging something over the root element. |
| `focused` | `boolean` | Whether the user is focused on the dropzone element. |
| `disabled` | `boolean` | Whether the file input is disabled. |
| `readOnly` | `boolean` | Whether the file input is in read-only mode. |
| `transforming` | `boolean` | Whether files are currently being transformed via `transformFiles`. |
| `maxFilesReached` | `boolean` | Whether the maximum number of files has been reached. |
| `remainingFiles` | `number` | The number of files that can still be added. |
| `openFilePicker` | `VoidFunction` | Function to open the file dialog. |
| `deleteFile` | `(file: File, type?: ItemType \| undefined) => void` | Function to delete the file from the list. |
| `acceptedFiles` | `File[]` | The accepted files that have been dropped or selected. |
| `rejectedFiles` | `FileRejection[]` | The files that have been rejected. |
| `setFiles` | `(files: File[]) => void` | Sets the accepted files. |
| `clearFiles` | `VoidFunction` | Clears the accepted files. |
| `clearRejectedFiles` | `VoidFunction` | Clears the rejected files. |
| `getFileSize` | `(file: File) => string` | Returns the formatted file size (e.g. 1.2MB). |
| `createFileUrl` | `(file: File, cb: (url: string) => void) => VoidFunction` | Returns the preview url of a file. Returns a function to revoke the url. |
| `setClipboardFiles` | `(dt: DataTransfer \| null) => boolean` | Sets the clipboard files Returns `true` if the clipboard data contains files, `false` otherwise. |

## Accessibility

`FileUpload.Dropzone` renders a focusable `role="button"` element (`role="application"` with `disableClick`) labelled "dropzone" by default; set its `aria-label` through the root's `translations.dropzone`.

The hidden file input is removed from the accessibility tree (`aria-hidden`); the dropzone and `FileUpload.Trigger` are the accessible ways to open the file picker.

Each `FileUpload.ItemDeleteTrigger` is labelled "delete file <name>" and each preview image has the alt text "preview of <name>" by default (`translations.deleteFile` and `translations.itemPreview`).

| Key | Description |
| --- | --- |
| `Enter` | When focus is on the dropzone, opens the file picker (unless `disableClick` is set on the dropzone). |
| `Space` | When focus is on the dropzone, opens the file picker (unless `disableClick` is set on the dropzone). |
