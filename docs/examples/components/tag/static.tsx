import { BasicDemo } from './basic.demo'
import { ClosableDemo } from './closable.demo'
import { CustomDemo } from './custom.demo'
import { GradientDemo } from './gradient.demo'
import { PaletteDemo } from './palette.demo'
import { ShapeDemo } from './shape.demo'
import { UsageDemo } from './usage.demo'

import { tagPalettes, tagShapes, tagUsages } from './data'

export const DEMOS = {
  basic: {
    id: 'tag.basic',
    preview: <BasicDemo />,
  },
  usage: {
    id: 'tag.usage',
    preview: <UsageDemo />,
  },
  shape: {
    id: 'tag.shape',
    preview: <ShapeDemo />,
  },
  custom: {
    id: 'tag.custom',
    preview: <CustomDemo />,
  },
  closable: {
    id: 'tag.closable',
    preview: <ClosableDemo />,
  },
  palette: {
    id: 'tag.palette',
    preview: <PaletteDemo />,
  },
  gradient: {
    id: 'tag.gradient',
    preview: <GradientDemo />,
  },

  meta: `import { Tag } from '@cerberus/react'`,
  usageMeta: createOptions(tagUsages),
  shapesMeta: createOptions(tagShapes),
  paletteMeta: createOptions(tagPalettes),
}

function createOptions<T>(options: T[]): string {
  return `options: ${options}`
}
