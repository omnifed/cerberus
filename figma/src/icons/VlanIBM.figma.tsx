import figma from '@figma/code-connect'
import { VlanIBM } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VlanIBM,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-6',

  {
    imports: ["import { VlanIBM } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VlanIBM size={props.size} />,
  },
)
