import figma from '@figma/code-connect'
import { Cy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-678',

  {
    imports: ["import { Cy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cy size={props.size} />,
  },
)
