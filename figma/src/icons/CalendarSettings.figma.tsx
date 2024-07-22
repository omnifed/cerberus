import figma from '@figma/code-connect'
import { CalendarSettings } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CalendarSettings,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-943',

  {
    imports: ["import { CalendarSettings } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CalendarSettings size={props.size} />,
  },
)
