import { BasicDemo } from './basic.demo'
import { CardsDemo } from './status.demo'
import { StatusCustomDemo } from './statusCustom.demo'
import { ErrorHandlingDemo } from './error.demo'
import { DisableDropDemo } from './disableDrop.demo'
import { PreventDropDemo } from './preventDrop.demo'
import { PreventDoubleOpenDemo } from './preventDoubleOpen.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  status: { preview: <CardsDemo /> },
  statusCustom: { preview: <StatusCustomDemo /> },
  error: { preview: <ErrorHandlingDemo /> },
  disableDrop: { preview: <DisableDropDemo /> },
  preventDrop: { preview: <PreventDropDemo /> },
  preventDoubleOpen: { preview: <PreventDoubleOpenDemo /> },
}
