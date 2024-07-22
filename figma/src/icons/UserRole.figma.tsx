import figma from '@figma/code-connect'
import { UserRole } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserRole,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-934',

  {
    imports: ["import { UserRole } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserRole size={props.size} />,
  },
)
