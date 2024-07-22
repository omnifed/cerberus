import figma from '@figma/code-connect'
import { VirtualColumn } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VirtualColumn,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1164',

  {
    imports: ["import { VirtualColumn } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VirtualColumn size={props.size} />,
  },
)
