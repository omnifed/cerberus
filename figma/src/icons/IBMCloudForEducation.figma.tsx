import figma from '@figma/code-connect'
import { IBMCloudForEducation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudForEducation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-148',

  {
    imports: ["import { IBMCloudForEducation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudForEducation size={props.size} />,
  },
)
