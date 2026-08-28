import { BasicDemo } from './basic.demo'
import { ChangeEndDemo } from './changeEnd.demo'
import { CollisionDemo } from './collision.demo'
import { ControlledDemo } from './controlled.demo'
import { DisabledDemo } from './disabled.demo'
import { DraggingIndicatorDemo } from './indicator.demo'
import { LabelDemo } from './label.demo'
import { MarksDemo } from './marks.demo'
import { OverlapDemo } from './overlap.demo'
import { PaletteDemo } from './palette.demo'
import { RangeDemo } from './range.demo'
import { SizesDemo } from './sizes.demo'
import { StepsDemo } from './steps.demo'
import { StoreDemo } from './store.demo'
import { UsageDemo } from './usage.demo'
import { VerticalDemo } from './vertical.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  changeEnd: {
    preview: <ChangeEndDemo />,
  },
  controlled: {
    preview: <ControlledDemo />,
  },
  disabled: {
    preview: <DisabledDemo />,
  },
  indicator: {
    preview: <DraggingIndicatorDemo />,
  },
  label: {
    preview: <LabelDemo />,
  },
  marks: {
    preview: <MarksDemo />,
  },
  overlap: {
    preview: <OverlapDemo />,
  },
  collision: {
    preview: <CollisionDemo />,
  },
  palette: {
    preview: <PaletteDemo />,
  },
  range: {
    preview: <RangeDemo />,
  },
  sizes: {
    preview: <SizesDemo />,
  },
  steps: {
    preview: <StepsDemo />,
  },
  store: {
    preview: <StoreDemo />,
  },
  usage: {
    preview: <UsageDemo />,
  },
  vertical: {
    preview: <VerticalDemo />,
  },
}
