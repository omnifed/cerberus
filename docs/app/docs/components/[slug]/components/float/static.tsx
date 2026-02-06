import { BasicDemo } from './basic.demo'
import { PlacementsDemo } from './placements.demo'
import { OffsetXDemo } from './offsetX.demo'
import { OffsetYDemo } from './offsetY.demo'
import { OffsetDemo } from './offset.demo'
import { AvatarDemo } from './avatar.demo'

export const DEMOS = {
  basic: {
    id: 'float.basic',
    preview: <BasicDemo />,
  },
  placements: {
    id: 'float.placements',
    preview: <PlacementsDemo />,
  },
  offsetX: {
    id: 'float.offsetX',
    preview: <OffsetXDemo />,
  },
  offsetY: {
    id: 'float.offsetY',
    preview: <OffsetYDemo />,
  },
  offset: {
    id: 'float.offset',
    preview: <OffsetDemo />,
  },
  avatar: {
    id: 'float.avatar',
    preview: <AvatarDemo />,
  },
  meta: `import { Float } from 'styled-system/jsx';`,
}
