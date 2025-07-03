import { button } from './button'
import { iconButton } from './iconButton'
import { label } from './label'
import { tag } from './tag'

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
import { menu } from './slots/menu'
import { progressBar } from './slots/progressBar'
import { radioGroup } from './slots/radio'
import { ratingGroup } from './slots/ratingGroup'
import { select } from './slots/select'
import { switchRecipe } from './slots/switch'
import { table } from './slots/table'
import { tabs } from './slots/tabs'
import { toast } from './slots/toast'
import { tooltip } from './slots/tooltip'

// DEPRECATED: remove in v1
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
 * @module
 */

export const recipes = {
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
  avatar,
  accordion,
  admonition,
  carousel,
  checkbox,
  circularProgress,
  combobox,
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
  ratingGroup,
  select,
  switchRecipe,
  table,
  tabs,
  toast,
  toggle,
  tooltip,
}
