import figma from '@figma/code-connect'
import { IBMCloudPakSecurity } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakSecurity,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1320',

  {
    imports: ["import { IBMCloudPakSecurity } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakSecurity size={props.size} />,
  },
)
