import { BasicDemo } from './basic.demo'
import { AttachedDemo } from './attached.demo'
import { CompactDemo } from './compact.demo'
import { SliceDemo } from './slice.demo'
import { AlignmentDemo } from './alignment.demo'
import { ControlledDemo } from './controlled.demo'
import { PageDemo } from './page.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  attached: {
    preview: <AttachedDemo />,
  },
  compact: {
    preview: <CompactDemo />,
  },
  slice: {
    preview: <SliceDemo />,
  },
  alignment: {
    preview: <AlignmentDemo />,
  },
  controlled: {
    preview: <ControlledDemo />,
  },
  page: {
    preview: <PageDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },
}
