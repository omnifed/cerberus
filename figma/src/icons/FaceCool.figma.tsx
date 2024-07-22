import figma from '@figma/code-connect'
import { FaceCool } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceCool,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1673',

  {
    imports: ["import { FaceCool } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceCool size={props.size} />,
  },
)
