import figma from '@figma/code-connect'
import { IBMZCloudModStack } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMZCloudModStack,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1332',

  {
    imports: ["import { IBMZCloudModStack } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMZCloudModStack size={props.size} />,
  },
)
