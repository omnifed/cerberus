import figma from '@figma/code-connect'
import { IBMDataReplication } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMDataReplication,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1269',

  {
    imports: ["import { IBMDataReplication } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMDataReplication size={props.size} />,
  },
)
