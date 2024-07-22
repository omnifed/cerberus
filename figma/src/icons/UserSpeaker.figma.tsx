import figma from '@figma/code-connect'
import { UserSpeaker } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UserSpeaker,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-946',

  {
    imports: ["import { UserSpeaker } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UserSpeaker size={props.size} />,
  },
)
