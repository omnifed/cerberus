import figma from '@figma/code-connect'
import { UserSponsor } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserSponsor,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-958',

  {
    imports: ["import { UserSponsor } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserSponsor size={props.size} />,
  },
)
