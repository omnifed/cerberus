import figma from '@figma/code-connect'
import { UserXRay } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserXRay,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-949',

  {
    imports: ["import { UserXRay } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserXRay size={props.size} />,
  },
)
