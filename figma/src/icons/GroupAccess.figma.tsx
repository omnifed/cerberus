import figma from '@figma/code-connect'
import { GroupAccess } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GroupAccess,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-185',

  {
    imports: ["import { GroupAccess } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GroupAccess size={props.size} />,
  },
)
