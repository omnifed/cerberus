import { BasicDemo } from './basic.demo'
import { PlacementsDemo } from './placements.demo'
import { OffsetXDemo } from './offsetX.demo'
import { OffsetYDemo } from './offsetY.demo'
import { OffsetDemo } from './offset.demo'
import { AvatarDemo } from './avatar.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  placements: {
    preview: <PlacementsDemo />,
  },
  offsetX: {
    preview: <OffsetXDemo />,
  },
  offsetY: {
    preview: <OffsetYDemo />,
  },
  offset: {
    preview: <OffsetDemo />,
  },
  avatar: {
    preview: <AvatarDemo />,
  },
}
