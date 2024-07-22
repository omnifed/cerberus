import figma from '@figma/code-connect'
import { WatsonHealthSmoothing } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthSmoothing,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-222',

  {
    imports: ["import { WatsonHealthSmoothing } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthSmoothing size={props.size} />,
  },
)
