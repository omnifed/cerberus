---
'@cerberus-design/react': major
'@cerberus/panda-preset': major
---

FileStatus is now a v2.1 compound with its own `@cerberus-design/react/file-status` module. `<FileStatus>` (also `FileStatus.El`) renders the same card as before, and it now takes direct part children: `FileStatus.Icon`, `.Info`, `.Name`, `.Progress`, `.StatusText` and `.Action`. A self-closing part patches its props; a part with children replaces its default content.

Silent behavior changes:

- The progress bar's `id` is now `progress:<id>`. Before, the card root and the progress bar both rendered `id`, a duplicate id.
- The status text is a `<span data-part="status-text">` (still with `id="help:<file>"`) instead of a `Field.HelperText` wrapped in a `Field.Root`.
- Every layer renders `data-scope="file-status"` and its `data-part`, and the root renders `data-status` (`todo`, `processing`, `done` or `error`) for status-specific styling.
- Children of `<FileStatus>` that aren't parts now render at the end of the info column. Before, they were silently dropped.
- An unknown `status` no longer throws while rendering the icon; it shows the waiting state.

Breaking changes:

- `@cerberus-design/react/file-upload` no longer exports `FileStatus`, `processStatus`, `FileStatusProps`, `FileBaseStatusProps`, `FileStatusKey` or `FileStatusActions`. Import them from `@cerberus-design/react` (unchanged) or `@cerberus-design/react/file-status`.
- The `fileStatus` recipe's slots are now `root`, `icon`, `info`, `name` and `statusText`, which hold the styles the component used to inline. Its `status` variant is removed: it only styled the `icon` slot, which nothing rendered. `FileStatusVariantProps` no longer has `status`.

New:

- `FileStatus.Root`, `.Icon`, `.Info`, `.Name` and `.StatusText` primitives, and the `FileStatus.Progress` and `FileStatus.Action` abstractions. They work on their own too: `Progress`'s `id`, `label` and `now` are optional, and `Action` picks its icon, label and palette from `status`.
- `status` also accepts the plain strings `'todo'`, `'processing'`, `'done'` and `'error'`.
- `fileStatusAnatomy` from `@cerberus/panda-preset`.
