import { BasicDemo } from './basic.demo'
import { ChangeEndDemo } from './changeEnd.demo'
import { CollisionDemo } from './collision.demo'
import { ControlledDemo } from './controlled.demo'
import { DisabledDemo } from './disabled.demo'
import { DraggingIndicatorDemo } from './indicator.demo'
import { LabelDemo } from './label.demo'
import { MarksDemo } from './marks.demo'
import { OverlapDemo } from './overlap.demo'
import { PaletteDemo } from './palette.demo'
import { RangeDemo } from './range.demo'
import { SizesDemo } from './sizes.demo'
import { StepsDemo } from './steps.demo'
import { StoreDemo } from './store.demo'
import { UsageDemo } from './usage.demo'
import { VerticalDemo } from './vert.demo'

export const DEMOS = {
  basic: {
    id: 'slider.basic',
    preview: <BasicDemo />,
  },
  changeEnd: {
    id: 'slider.changeEnd',
    preview: <ChangeEndDemo />,
  },
  controlled: {
    id: 'slider.controlled',
    preview: <ControlledDemo />,
  },
  disabled: {
    id: 'slider.disabled',
    preview: <DisabledDemo />,
  },
  indicator: {
    id: 'slider.indicator',
    preview: <DraggingIndicatorDemo />,
  },
  label: {
    id: 'slider.label',
    preview: <LabelDemo />,
  },
  marks: {
    id: 'slider.marks',
    preview: <MarksDemo />,
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
  steps: {
    id: 'slider.steps',
    preview: <StepsDemo />,
  },
  store: {
    id: 'slider.store',
    preview: <StoreDemo />,
  },
  usage: {
    id: 'slider.usage',
    preview: <UsageDemo />,
  },
  vertical: {
    id: 'slider.vert',
    preview: <VerticalDemo />,
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

  cssVariables: `'--slider-thumb-size': '1.5rem'   // size of the thumb
'--slider-track-size': '0.5rem'   // height of the track
'--slider-marker-center': '9px'   // the center position of the track
'--slider-marker-size': '0.06rem' // size of the marker
'--slider-marker-inset': '3px'    // distance from the track edge to the marker
'--slider-dragging-indicator-offset': '-2rem' // The gap between the thumb and the dragging indicator`,
}
