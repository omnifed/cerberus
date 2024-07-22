import figma from '@figma/code-connect'
import { UserAdmin } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserAdmin,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-885',

  {
    imports: ["import { UserAdmin } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserAdmin size={props.size} />,
  },
)
