import { BasicDemo } from './basic.demo'
import { AppearanceDemo } from './appearance.demo'
import { OrientationDemo } from './orientation.demo'
import { ThicknessDemo } from './thickness.demo'
import { ColorDemo } from './color.demo'
import { LabelDemo } from './label.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  appearance: {
    preview: <AppearanceDemo />,
  },
  orientation: {
    preview: <OrientationDemo />,
  },
  thickness: {
    preview: <ThicknessDemo />,
  },
  color: {
    preview: <ColorDemo />,
  },
  label: {
    preview: <LabelDemo />,
  },
}
