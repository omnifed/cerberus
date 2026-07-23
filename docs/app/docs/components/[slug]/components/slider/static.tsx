import { BasicDemo } from './basic.demo'
import { CollisionDemo } from './collision.demo'
import { LabelDemo } from './label.demo'
import { OverlapDemo } from './overlap.demo'
import { PaletteDemo } from './palette.demo'
import { RangeDemo } from './range.demo'
import { SizesDemo } from './sizes.demo'
import { UsageDemo } from './usage.demo'

export const DEMOS = {
  basic: {
    id: 'slider.basic',
    preview: <BasicDemo />,
  },
  label: {
    id: 'slider.label',
    preview: <LabelDemo />,
  },
  overlap: {
    id: 'slider.overlap',
    preview: <OverlapDemo />,
  },
  collision: {
    id: 'slider.collision',
    preview: <CollisionDemo />,
  },
  palette: {
    id: 'slider.palette',
    preview: <PaletteDemo />,
  },
  range: {
    id: 'slider.range',
    preview: <RangeDemo />,
  },
  sizes: {
    id: 'slider.sizes',
    preview: <SizesDemo />,
  },
  usage: {
    id: 'slider.usage',
    preview: <UsageDemo />,
  },

  meta: "import { Slider } from '@cerberus/react'",

  trackShortcut: `<SliderTrack>
  <SliderRange />
</SliderTrack>`,

  thumbShortcut: `<SliderThumb>
  <SliderDraggingIndicator />
  <SliderHiddenInput />
</SliderThumb>`,

  markShortcut: `<SliderMarkerGroup>
  <SliderMarker />
</SliderMarkerGroup>`,

  thumbsShortcut: `<Slider.Thumbs values={[25, 50]} />`,
  marksShortcut: `<Slider.Marks values={[0, 25, 50, 75, 100]} />`,
}
