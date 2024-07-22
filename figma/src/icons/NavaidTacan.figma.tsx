import figma from '@figma/code-connect'
import { NavaidTacan } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidTacan,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1063',

  {
    imports: ["import { NavaidTacan } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidTacan size={props.size} />,
  },
)
