import figma from '@figma/code-connect'
import { FaceMask } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FaceMask,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1688',

  {
    imports: ["import { FaceMask } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FaceMask size={props.size} />,
  },
)
