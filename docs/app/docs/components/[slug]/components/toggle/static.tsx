import { NotificationOff, Notification } from '@carbon/icons-react'
import { ToggleParts, IconButton } from '@cerberus-design/react'

export default function BasicPreview() {
  return (
    <ToggleParts.Root defaultPressed={true} asChild>
      <IconButton ariaLabel="Notification preferences">
        <ToggleParts.Indicator fallback={<NotificationOff />}>
          <Notification />
        </ToggleParts.Indicator>
      </IconButton>
    </ToggleParts.Root>
  )
}
