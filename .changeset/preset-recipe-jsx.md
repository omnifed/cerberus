---
'@cerberus/panda-preset': major
---

Recipe `jsx` lists now name the v2.1 components, so Panda extracts responsive and conditional variant values from them again (for example `<Button.IconButton shape={{ base: 'square', md: 'circle' }}>`). Plain variant values were never affected: the preset's `staticCss.recipes: '*'` pre-generates them.

Silent behavior changes:

- The lists no longer name removed v1 components (`FieldRoot`, `SelectRoot`, `TableRoot`, `Caption`…). Responsive values on those names are no longer extracted.
- Recipes whose public name is their capitalized key (`Accordion`, `Select`, `Tabs`…) drop their list and rely on Panda's default matching (`<Key>`, `<Key.Slot>`, `<KeySlot>`).

New lists cover `Button.IconButton`, `Button.Group`, `Tag.Closable`, `Tag.Gradient`, `Field.InputGroup`, `DatePicker.InputGroup`, `Switch.*`, `Rating.*`, `RadioGroup.Radio` and `FileUpload`. `fileUploader` no longer lists `ConfirmModal`/`PromptModal`, which was a copy-paste bug.
