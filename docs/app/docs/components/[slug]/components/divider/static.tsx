import { BasicDemo } from './basic.demo'
import { AppearanceDemo } from './appearance.demo'
import { OrientationDemo } from './orientation.demo'
import { ThicknessDemo } from './thickness.demo'
import { ColorDemo } from './color.demo'
import { LabelDemo } from './label.demo'

export const DEMOS = {
  basic: {
    id: 'divider.basic',
    preview: <BasicDemo />,
  },
  appearance: {
    id: 'divider.appearance',
    preview: <AppearanceDemo />,
  },
  orientation: {
    id: 'divider.orientation',
    preview: <OrientationDemo />,
  },
  thickness: {
    id: 'divider.thickness',
    preview: <ThicknessDemo />,
  },
  color: {
    id: 'divider.color',
    preview: <ColorDemo />,
  },
  label: {
    id: 'divider.label',
    preview: <LabelDemo />,
  },
  meta: `import { Divider } from "styled-system/jsx";`,
}
