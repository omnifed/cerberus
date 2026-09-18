import { BarDemo } from './bar.demo'
import { BarSizeDemo } from './barSize.demo'
import { BarStateDemo } from './barState.demo'
import { BarUsageDemo } from './barUsage.demo'
import { CircularDemo } from './circular.demo'
import { CircularSizeDemo } from './circularSize.demo'
import { HideValueTextDemo } from './hideValueText.demo'
import { LabelDemo } from './label.demo'

export const DEMOS = {
  bar: { preview: <BarDemo /> },
  barUsage: { preview: <BarUsageDemo /> },
  barSize: { preview: <BarSizeDemo /> },
  barState: { preview: <BarStateDemo /> },
  circular: { preview: <CircularDemo /> },
  circularSize: { preview: <CircularSizeDemo /> },
  hideValueText: { preview: <HideValueTextDemo /> },
  label: { preview: <LabelDemo /> },
}
