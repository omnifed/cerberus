import figma from '@figma/code-connect'
import { NavaidHelipad } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NavaidHelipad,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1084',

  {
    imports: ["import { NavaidHelipad } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NavaidHelipad size={props.size} />,
  },
)
