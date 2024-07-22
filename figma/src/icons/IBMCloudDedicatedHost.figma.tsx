import figma from '@figma/code-connect'
import { IBMCloudDedicatedHost } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudDedicatedHost,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1278',

  {
    imports: ["import { IBMCloudDedicatedHost } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudDedicatedHost size={props.size} />,
  },
)
