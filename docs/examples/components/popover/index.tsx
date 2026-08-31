import { BasicDemo } from './basic.demo'
import { SlotsDemo } from './slots.demo'
import { SizesDemo } from './sizes.demo'
import { ArrowDemo } from './arrow.demo'
import { LazyDemo } from './lazy.demo'
import { PlacementDemo } from './placement.demo'
import { NestedDemo } from './nested.demo'
import { AnchorDemo } from './anchor.demo'
import { CustomDemo } from './custom.demo'

export const DEMOS = {
  basic: {
    preview: <BasicDemo />,
  },
  slots: {
    preview: <SlotsDemo />,
  },
  sizes: {
    preview: <SizesDemo />,
  },
  arrow: {
    preview: <ArrowDemo />,
  },
  lazy: {
    preview: <LazyDemo />,
  },
  placement: {
    preview: <PlacementDemo />,
  },
  nested: {
    preview: <NestedDemo />,
  },
  anchor: {
    preview: <AnchorDemo />,
  },
  custom: {
    preview: <CustomDemo />,
  },

  meta: `import { Popover } from '@cerberus/react';`,

  dataSelector: `<Popover
    css={{
      '& :is([data-part=content])': {
        maxHeight: calc(var(--available-height) - 100px);
      }
    }}
  />`,
}
