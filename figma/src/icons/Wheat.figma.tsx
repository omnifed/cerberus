import figma from '@figma/code-connect'
import { Wheat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Wheat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1152',

  {
    imports: ["import { Wheat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Wheat size={props.size} />,
  },
)
