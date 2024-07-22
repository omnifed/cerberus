import figma from '@figma/code-connect'
import { Eyedropper } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Eyedropper,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-243',

  {
    imports: ["import { Eyedropper } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Eyedropper size={props.size} />,
  },
)
