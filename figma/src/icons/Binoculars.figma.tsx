import figma from '@figma/code-connect'
import { Binoculars } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Binoculars,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-3',

  {
    imports: ["import { Binoculars } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Binoculars size={props.size} />,
  },
)
