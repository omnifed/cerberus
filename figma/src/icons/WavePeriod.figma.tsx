import figma from '@figma/code-connect'
import { WavePeriod } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WavePeriod,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-406',

  {
    imports: ["import { WavePeriod } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WavePeriod size={props.size} />,
  },
)
