import figma from '@figma/code-connect'
import { SignalStrength } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SignalStrength,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-107',

  {
    imports: ["import { SignalStrength } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SignalStrength size={props.size} />,
  },
)
