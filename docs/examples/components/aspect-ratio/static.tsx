import { BasicDemo } from './basic.demo'
import { ImgDemo } from './img.demo'
import { MapsDemo } from './maps.demo'
import { ResponsiveDemo } from './responsive.demo'

export const DEMOS = {
  basic: {
    id: 'aspect-ratio.basic',
    preview: <BasicDemo />,
  },
  img: {
    id: 'aspect-ratio.img',
    preview: <ImgDemo />,
  },
  video: {
    id: 'aspect-ratio.basic',
    preview: <BasicDemo />,
  },
  maps: {
    id: 'aspect-ratio.maps',
    preview: <MapsDemo />,
  },
  responsive: {
    id: 'aspect-ratio.responsive',
    preview: <ResponsiveDemo />,
  },
  meta: `import { AspectRatio } from 'styled-system/jsx'`,
}
