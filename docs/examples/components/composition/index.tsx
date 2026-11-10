import { AsChildDemo } from './asChild.demo'
import { SlotPropsDemo } from './slotProps.demo'
import { SlotsDemo } from './slots.demo'
import { StyledDemo } from './styled.demo'
import { UnstyledDemo } from './unstyled.demo'

export const DEMOS = {
  asChild: { preview: <AsChildDemo /> },
  unstyled: { preview: <UnstyledDemo /> },
  styled: { preview: <StyledDemo /> },
  slots: { preview: <SlotsDemo /> },
  slotProps: { preview: <SlotPropsDemo /> },
}
