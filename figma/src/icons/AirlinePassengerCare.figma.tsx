import figma from '@figma/code-connect'
import { AirlinePassengerCare } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AirlinePassengerCare,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-3260',

  {
    imports: ["import { AirlinePassengerCare } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AirlinePassengerCare size={props.size} />,
  },
)
