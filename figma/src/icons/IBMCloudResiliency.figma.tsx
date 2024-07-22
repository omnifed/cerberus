import figma from '@figma/code-connect'
import { IBMCloudResiliency } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudResiliency,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-184',

  {
    imports: ["import { IBMCloudResiliency } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudResiliency size={props.size} />,
  },
)
