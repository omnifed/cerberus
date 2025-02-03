import { avatar } from './avatar'
import { button } from './button'
import { iconButton } from './iconButton'
import { label } from './label'
import { tag } from './tag'
import { thead } from './thead'
import { th } from './th'
import { tbody } from './tbody'
import { td } from './td'

import { accordion } from './slots/accordion'
import { admonition } from './slots/admonition'
import { checkbox } from './slots/checkbox'
import { datePicker } from './slots/datepicker'
import { dialog } from './slots/dialog'
import { field } from './slots/field'
import { fieldset } from './slots/fieldset'
import { fileStatus } from './slots/fileStatus'
import { fileUploader } from './slots/fileUploader'
import { menu } from './slots/menu'
import { notification } from './slots/notification'
import { progressBar } from './slots/progressBar'
import { radioGroup } from './slots/radio'
import { select } from './slots/select'
import { switchRecipe } from './slots/switch'
import { table } from './slots/table'
import { tabs } from './slots/tabs'
import { tooltip } from './slots/tooltip'

// DEPRECATED: remove in v1
import { fieldMessage } from './fieldMessage'
import { input } from './slots/input'
import { modal } from './slots/modal'
import { toggle } from './slots/toggle'

/**
 * Recipe module for the Panda preset
 * @module
 */

export const recipes = {
  avatar,
  button,
  fieldMessage,
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
  checkbox,
  datePicker,
  dialog,
  field,
  fieldset,
  fileStatus,
  fileUploader,
  input,
  menu,
  modal,
  notification,
  progressBar,
  radioGroup,
  select,
  switchRecipe,
  table,
  tabs,
  toggle,
  tooltip,
}
