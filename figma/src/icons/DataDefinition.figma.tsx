import figma from '@figma/code-connect'
import { DataDefinition } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataDefinition,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-845',

  {
    imports: ["import { DataDefinition } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataDefinition size={props.size} />,
  },
)
