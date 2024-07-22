import figma from '@figma/code-connect'
import { Logout } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Logout,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-30',

  {
    imports: ["import { Logout } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Logout size={props.size} />,
  },
)
