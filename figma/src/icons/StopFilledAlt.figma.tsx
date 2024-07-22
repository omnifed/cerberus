import figma from '@figma/code-connect'
import { StopFilledAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StopFilledAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35235',

  {
    imports: ["import { StopFilledAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StopFilledAlt size={props.size} />,
  },
)
