---
'@cerberus-design/react': major
---

FileUpload now uses the v2.1 compound API. `<FileUpload>` (also available as `FileUpload.El`, and still exported as `FileUploader`) renders what v1's `FileUploader` rendered: the dropzone with the Cerberus icon, an optional `heading`, the "Import <types> files" text and a description, the accepted files with their previews, and the hidden input. `ImgPreview` and `FileStatus` are still exported.

Silent behavior changes (these compile unchanged):

- **Non-part children of `<FileUpload>`/`FileUploader` render after the file list even when `showPreview` is on.** v1 only rendered them with `showPreview={false}` and dropped them otherwise.
- **`FileUpload.Icon`, `FileUpload.Heading` and `FileUpload.Description` read the recipe from a `FileUpload.Root`/`RootProvider`** and throw outside one (v1's standalone exports rendered anywhere).
- Direct `FileUpload.Label`, `Dropzone`, `Icon`, `Heading`, `Description`, `ClearTrigger` or `HiddenInput` children of `<FileUpload>` override that part instead of rendering as extra content.
- Props passed to `ImgPreview` (`FileUpload.ItemGroupWithPreview`) land on the item group element; v1 ignored them.
- `FileUpload.Icon`, `Heading` and `Description` carry `data-scope="file-upload"` and `data-part="icon"`, `"heading"` or `"description"`.
- `heading` accepts a `ReactNode`.

Breaking changes:

- **`ImgPreview` is now `FileUpload.ItemGroupWithPreview`** (still exported as `ImgPreview`). It renders an item per accepted file, with a preview for images; direct `FileUpload.ItemPreview`, `ItemPreviewImage`, `ItemName`, `ItemSizeText` or `ItemDeleteTrigger` children patch that part of every item.
- `FileUploadContent` (and `FileUploadContentProps`) is removed; `<FileUpload>` renders the text group itself.
- The part props are typed (they resolved to `any` through `FileUploadParts`): e.g. `FileUpload.Item` requires `file`.
- The standalone part exports are removed; use the compound members instead: `FileUploadRoot`, `FileUploadDropzone`, `FileUploadLabel`, `FileUploadTrigger`, `FileUploadClearTrigger`, `FileUploadItemGroup`, `FileUploadItem`, `FileUploadItemPreview`, `FileUploadItemPreviewImage`, `FileUploadItemName`, `FileUploadItemSizeText`, `FileUploadItemDeleteTrigger`, `FileUploadHiddenInput`, `FileUploadContext`, `FileUploadIcon`, `FileUploadHeading`, `FileUploadDescription` → `FileUpload.Root`, … `FileUpload.Description`.
- `FileUploadParts` is removed; the compound object replaces it.
- Ark's raw `FileUploadRootProvider` is no longer re-exported (it provides no Cerberus recipe context): use `FileUpload.RootProvider`. `useFileUpload` is still exported.

New:

- `FileUpload.RootProvider` and `FileUpload.Context`.
- The `FileUploadFileAcceptDetails`, `FileUploadFileChangeDetails`, `FileUploadFileRejectDetails` and `FileUploadFileError` types.
