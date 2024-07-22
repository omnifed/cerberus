import figma from '@figma/code-connect'
import { NavaidVordme } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidVordme,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1054',

  {
    imports: ["import { NavaidVordme } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidVordme size={props.size} />,
  },
)
