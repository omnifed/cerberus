import figma from '@figma/code-connect'
import { BringForward } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BringForward,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-156',

  {
    imports: ["import { BringForward } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BringForward size={props.size} />,
  },
)
