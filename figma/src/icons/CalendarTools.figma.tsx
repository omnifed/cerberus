import figma from '@figma/code-connect'
import { CalendarTools } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CalendarTools,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-940',

  {
    imports: ["import { CalendarTools } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CalendarTools size={props.size} />,
  },
)
