import figma from '@figma/code-connect'
import { IBMZCloudProvisioning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMZCloudProvisioning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1335',

  {
    imports: ["import { IBMZCloudProvisioning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMZCloudProvisioning size={props.size} />,
  },
)
