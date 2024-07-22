import figma from '@figma/code-connect'
import { InformationSquareFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InformationSquareFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-246',

  {
    imports: ["import { InformationSquareFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InformationSquareFilled size={props.size} />,
  },
)
