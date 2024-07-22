import figma from '@figma/code-connect'
import { CircleSolid } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CircleSolid,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-168',

  {
    imports: ["import { CircleSolid } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CircleSolid size={props.size} />,
  },
)
