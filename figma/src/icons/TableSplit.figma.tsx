import figma from '@figma/code-connect'
import { TableSplit } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TableSplit,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1128',

  {
    imports: ["import { TableSplit } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TableSplit size={props.size} />,
  },
)
