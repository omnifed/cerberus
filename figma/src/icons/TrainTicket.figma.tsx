import figma from '@figma/code-connect'
import { TrainTicket } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrainTicket,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-943',

  {
    imports: ["import { TrainTicket } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrainTicket size={props.size} />,
  },
)
