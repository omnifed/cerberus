import { BasicDemo } from './basic.demo'
import { CustomAvatar } from './custom.demo'
import { FloatDemo } from './float.demo'
import { GradientDemo } from './gradient.demo'
import { GroupDemo } from './group.demo'
import { NextDemo } from './next.demo'
import { SizesDemo } from './sizes.demo'
import { UnstyledAvatar } from './unstyled.demo'
import { UnstyledSlotAvatar } from './unstyledSlot.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  sizes: { preview: <SizesDemo /> },
  gradient: { preview: <GradientDemo /> },
  group: { preview: <GroupDemo /> },
  float: { preview: <FloatDemo /> },
  next: { preview: <NextDemo /> },
  custom: { preview: <CustomAvatar /> },
  unstyled: { preview: <UnstyledAvatar /> },
  unstyledSlot: { preview: <UnstyledSlotAvatar /> },
}
