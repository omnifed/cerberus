import figma from '@figma/code-connect'
import { FitToHeight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FitToHeight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35070',

  {
    imports: ["import { FitToHeight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FitToHeight size={props.size} />,
  },
)
