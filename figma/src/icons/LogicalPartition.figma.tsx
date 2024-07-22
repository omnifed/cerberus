import figma from '@figma/code-connect'
import { LogicalPartition } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogicalPartition,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-278',

  {
    imports: ["import { LogicalPartition } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogicalPartition size={props.size} />,
  },
)
