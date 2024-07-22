import figma from '@figma/code-connect'
import { InformationSquare } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InformationSquare,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-245',

  {
    imports: ["import { InformationSquare } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InformationSquare size={props.size} />,
  },
)
