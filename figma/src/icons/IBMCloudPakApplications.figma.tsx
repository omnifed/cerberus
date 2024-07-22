import figma from '@figma/code-connect'
import { IBMCloudPakApplications } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudPakApplications,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1299',

  {
    imports: ["import { IBMCloudPakApplications } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudPakApplications size={props.size} />,
  },
)
