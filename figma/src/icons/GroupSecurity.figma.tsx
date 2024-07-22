import figma from '@figma/code-connect'
import { GroupSecurity } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GroupSecurity,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-194',

  {
    imports: ["import { GroupSecurity } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GroupSecurity size={props.size} />,
  },
)
