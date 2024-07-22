import figma from '@figma/code-connect'
import { NavaidDme } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidDme,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1087',

  {
    imports: ["import { NavaidDme } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidDme size={props.size} />,
  },
)
