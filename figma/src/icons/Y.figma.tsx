import figma from '@figma/code-connect'
import { Y } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Y,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-695',

  {
    imports: ["import { Y } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Y size={props.size} />,
  },
)
