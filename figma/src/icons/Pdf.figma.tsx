import figma from '@figma/code-connect'
import { Pdf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Pdf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1194',

  {
    imports: ["import { Pdf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Pdf size={props.size} />,
  },
)
