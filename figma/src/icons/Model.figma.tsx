import figma from '@figma/code-connect'
import { Model } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Model,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1140',

  {
    imports: ["import { Model } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Model size={props.size} />,
  },
)
