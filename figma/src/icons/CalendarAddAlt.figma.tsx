import figma from '@figma/code-connect'
import { CalendarAddAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CalendarAddAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-946',

  {
    imports: ["import { CalendarAddAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CalendarAddAlt size={props.size} />,
  },
)
