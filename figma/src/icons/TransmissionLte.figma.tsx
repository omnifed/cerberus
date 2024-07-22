import figma from '@figma/code-connect'
import { TransmissionLte } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TransmissionLte,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-122',

  {
    imports: ["import { TransmissionLte } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TransmissionLte size={props.size} />,
  },
)
