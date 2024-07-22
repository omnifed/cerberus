import figma from '@figma/code-connect'
import { Gradient } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Gradient,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-246',

  {
    imports: ["import { Gradient } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Gradient size={props.size} />,
  },
)
