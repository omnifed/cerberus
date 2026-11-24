import { button } from './button'
import { buttonGroup } from './buttonGroup'
import { group } from './group'
import { iconButton } from './iconButton'
import { label } from './label'
import { tag } from './tag'
import { gradientTag } from './gradientTag'
import { closableTag } from './closableTag'

import { accordion } from './slots/accordion'
import { admonition } from './slots/admonition'
import { avatar } from './slots/avatar'
import { carousel } from './slots/carousel'
import { checkbox } from './slots/checkbox'
import { circularProgress } from './slots/circularProgress'
import { combobox } from './slots/combobox'
import { datePicker } from './slots/datepicker'
import { dialog } from './slots/dialog'
import { field } from './slots/field'
import { fieldset } from './slots/fieldset'
import { fileStatus } from './slots/fileStatus'
import { fileUploader } from './slots/fileUploader'
import { collapsible } from './slots/collapsible'
import { marquee } from './slots/marquee'
import { menu } from './slots/menu'
import { numberInput } from './slots/numberInput'
import { pinInput } from './slots/pinInput'
import { popover } from './slots/popover'
import { progressBar } from './slots/progressBar'
import { radioGroup } from './slots/radio'
import { ratingGroup } from './slots/ratingGroup'
import { select } from './slots/select'
import { slider } from './slots/slider'
import { switchRecipe } from './slots/switch'
import { table } from './slots/table'
import { tabs } from './slots/tabs'
import { toast } from './slots/toast'
import { tooltip } from './slots/tooltip'

// v2 Note: Remove deprecated recipes
import { fieldMessage } from './fieldMessage'
import { input } from './slots/input'
import { modal } from './slots/modal'
import { notification } from './slots/notification'
import { toggle } from './slots/toggle'
import { thead } from './thead'
import { th } from './th'
import { tbody } from './tbody'
import { td } from './td'

/**
 * Recipe module for the Panda preset
 *
 * ## The `jsx` lists
 *
 * Panda reads a recipe's `jsx` list to extract variant props from consumer
 * JSX (`<Button size={{ base: 'sm', md: 'lg' }} />`). The preset's
 * `staticCss.recipes: '*'` pre-generates every plain variant value, but not
 * responsive/conditional ones, so the lists still matter for those.
 *
 * Verified against Panda 2.5 (cssgen with and without `staticCss.recipes`):
 *
 * - With no `jsx` list, Panda matches `<Key>` (capitalized recipe key) and, for
 *   slot recipes, `<Key.Slot>` and `<KeySlot>`.
 * - An explicit `jsx` list REPLACES the bare `<Key>` match (so repeat it) but
 *   `<Key.Slot>`/`<KeySlot>` still match for slot recipes.
 * - Member expressions match by their exact string: `'Button.IconButton'`.
 *   Nothing is derived for config (non-slot) recipes.
 *
 * So add a `jsx` list only when the public v2.1 name differs from the
 * capitalized recipe key (`switchRecipe` -> `Switch`, `ratingGroup` ->
 * `Rating`, `iconButton` -> `Button.IconButton`) or a non-slot member takes
 * variant props (`Field.InputGroup`). Every entry must be exported from
 * `@cerberus-design/react`; `tests/panda-preset/recipes/jsx.test.ts` enforces it.
 * @module
 */

export const recipes = {
  button,
  buttonGroup,
  closableTag,
  fieldMessage,
  group,
  gradientTag,
  iconButton,
  label,
  tag,
  thead,
  th,
  tbody,
  td,
}

export const slotRecipes = {
  accordion,
  admonition,
  avatar,
  carousel,
  checkbox,
  circularProgress,
  combobox,
  collapsible,
  datePicker,
  dialog,
  field,
  fieldset,
  fileStatus,
  fileUploader,
  input,
  marquee,
  menu,
  modal,
  notification,
  numberInput,
  pinInput,
  popover,
  progressBar,
  radioGroup,
  ratingGroup,
  select,
  slider,
  switchRecipe,
  table,
  tabs,
  toast,
  toggle,
  tooltip,
}
