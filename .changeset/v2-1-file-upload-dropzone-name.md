---
'@cerberus-design/react': major
---

FileUpload: the dropzone's accessible name now matches its visible text.

Silent behavior changes:

- With `<FileUpload>` (`FileUploader`), the dropzone's `aria-label` used to be Zag's default, "dropzone". It is now the dropzone's visible text: the heading, the "Import … files" text and the description, or the text of a `FileUpload.Dropzone` child's children. Tests that query the dropzone by `{ name: 'dropzone' }` need updating.

Pass `translations={{ dropzone: '…' }}` to set it yourself; any other `translations` keys you pass are kept. `FileUpload.Root` compositions still default to "dropzone".
