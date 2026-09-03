import dynamic from 'next/dynamic'

const AnimationStyles = dynamic(() => import('./animations/animation-styles.lazy'))
const Durations = dynamic(() => import('./animations/durations.lazy'))
const FontTokensGroup = dynamic(() => import('./typography/font-tokens-group.lazy'))
const GradientList = dynamic(() => import('./gradients/list.lazy'))
const Keyframes = dynamic(() => import('./animations/keyframes.lazy'))
const LayerStyles = dynamic(() => import('./layer-styles.lazy'))
const PaletteGroup = dynamic(() => import('./colors/palette-group.lazy'))
const PrimitiveColorGroup = dynamic(() => import('./colors/primitive-color-group.lazy'))
const ShadowTokens = dynamic(() => import('./shadows/shadow-tokens.lazy'))
const SpacingVisual = dynamic(() => import('./spacing/spacing-visual.lazy'))
const TextGradient = dynamic(() => import('./gradients/text-gradient.lazy'))
const TypographyList = dynamic(() => import('./typography/list.lazy'))
const ZList = dynamic(() => import('./z-index/z-list.lazy'))
const ZPreview = dynamic(() => import('./z-index/z-preview.lazy'))

export const lazyMdxComponents = {
  AnimationStyles,
  Durations,
  FontTokensGroup,
  GradientList,
  Keyframes,
  LayerStyles,
  PaletteGroup,
  PrimitiveColorGroup,
  ShadowTokens,
  TextGradient,
  TypographyList,
  SpacingVisual,
  ZList,
  ZPreview,
}
