import { OverlaySlots } from 'src/types'

interface NoContentOverlayProps {
  custom?: OverlaySlots['noContent']
}

export function NoContentOverlay(props: NoContentOverlayProps) {
  if (props.custom) return <>{props.custom}</>

  return <div>No rows found</div>
}
