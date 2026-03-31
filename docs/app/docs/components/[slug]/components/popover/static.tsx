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
    id: 'popover.basic',
    preview: <BasicDemo />,
  },
  slots: {
    id: 'popover.slots',
    preview: <SlotsDemo />,
  },
  size: {
    id: 'popover.sizes',
    preview: <SizesDemo />,
  },
  arrow: {
    id: 'popover.arrow',
    preview: <ArrowDemo />,
  },
  lazy: {
    id: 'popover.lazy',
    preview: <LazyDemo />,
  },
  placement: {
    id: 'popover.placement',
    preview: <PlacementDemo />,
  },
  nested: {
    id: 'popover.nested',
    preview: <NestedDemo />,
  },
  anchor: {
    id: 'popover.anchor',
    preview: <AnchorDemo />,
  },
  custom: {
    id: 'popover.custom',
    preview: <CustomDemo />,
  },
  meta: `import { Popover } from '@cerberus/react';`,
}
