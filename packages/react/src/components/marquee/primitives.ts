import { Marquee } from '@ark-ui/react/marquee'
import { marquee, MarqueeVariantProps } from 'styled-system/recipes'
import { CerberusPrimitiveProps, createCerberusPrimitive } from '../../system'

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(marquee)

export type MarqueeRootProviderProps = CerberusPrimitiveProps<Marquee.RootProviderProps>
export const MarqueeRootProvider = withSlotRecipe(Marquee.RootProvider, 'root')

export type MarqueeRootProps = CerberusPrimitiveProps<
  Marquee.RootProps & MarqueeVariantProps
>
export const MarqueeRoot = withSlotRecipe(Marquee.Root, 'root')

export type MarqueeViewportProps = CerberusPrimitiveProps<Marquee.ViewportProps>
export const MarqueeViewport = withSlotRecipe(Marquee.Viewport, 'viewport')

export type MarqueeContentProps = CerberusPrimitiveProps<Marquee.ContentProps>
export const MarqueeContent = withSlotRecipe(Marquee.Content, 'content')

export type MarqueeEdgeProps = CerberusPrimitiveProps<Marquee.EdgeProps>
export const MarqueeEdge = withSlotRecipe(Marquee.Edge, 'edge')

export type MarqueeItemProps = CerberusPrimitiveProps<Marquee.ItemProps>
export const MarqueeItem = withNoRecipe(Marquee.Item)
