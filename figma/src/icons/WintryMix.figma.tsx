import figma from '@figma/code-connect'
import { WintryMix } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WintryMix,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9385-10',

  {
    imports: ["import { WintryMix } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WintryMix size={props.size} />,
  },
)
