import figma from '@figma/code-connect'
import { User } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  User,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-26',

  {
    imports: ["import { User } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <User size={props.size} />,
  },
)
