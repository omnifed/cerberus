import figma from '@figma/code-connect'
import { Ticket } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Ticket,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1315',

  {
    imports: ["import { Ticket } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Ticket size={props.size} />,
  },
)
