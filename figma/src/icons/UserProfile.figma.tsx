import figma from '@figma/code-connect'
import { UserProfile } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserProfile,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-931',

  {
    imports: ["import { UserProfile } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserProfile size={props.size} />,
  },
)
