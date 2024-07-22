import figma from '@figma/code-connect'
import { Mountain } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Mountain,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1093',

  {
    imports: ["import { Mountain } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Mountain size={props.size} />,
  },
)
