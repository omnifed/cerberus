import { BasicDemo } from './basic.demo'
import { CustomDemo } from './custom.demo'
import { ScrubberDemo } from './scrubber.demo'
import { SizesDemo } from './sizes.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  sizes: { preview: <SizesDemo /> },
  scrubber: { preview: <ScrubberDemo /> },
  custom: { preview: <CustomDemo /> },
}
