import figma from '@figma/code-connect'
import { Light } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Light,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36473',

  {
    imports: ["import { Light } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Light size={props.size} />,
  },
)
