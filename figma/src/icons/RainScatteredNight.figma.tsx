import figma from '@figma/code-connect'
import { RainScatteredNight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RainScatteredNight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-750',

  {
    imports: ["import { RainScatteredNight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RainScatteredNight size={props.size} />,
  },
)
