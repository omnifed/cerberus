import figma from '@figma/code-connect'
import { PcnZNode } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PcnZNode,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-317',

  {
    imports: ["import { PcnZNode } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PcnZNode size={props.size} />,
  },
)
