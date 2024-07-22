import figma from '@figma/code-connect'
import { GroupAccount } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GroupAccount,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-188',

  {
    imports: ["import { GroupAccount } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GroupAccount size={props.size} />,
  },
)
