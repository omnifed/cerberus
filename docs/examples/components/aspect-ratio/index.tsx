import { BasicDemo } from './basic.demo'
import { ImgDemo } from './img.demo'
import { MapsDemo } from './maps.demo'
import { ResponsiveDemo } from './responsive.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  img: {
    preview: <ImgDemo />,
  },
  video: {
    preview: <BasicDemo />,
  },
  maps: {
    preview: <MapsDemo />,
  },
  responsive: {
    preview: <ResponsiveDemo />,
  },
}
