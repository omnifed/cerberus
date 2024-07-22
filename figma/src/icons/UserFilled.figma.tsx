import figma from '@figma/code-connect'
import { UserFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-912',

  {
    imports: ["import { UserFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserFilled size={props.size} />,
  },
)
