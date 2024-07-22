import figma from '@figma/code-connect'
import { IBMPowerVs } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMPowerVs,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-15',

  {
    imports: ["import { IBMPowerVs } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMPowerVs size={props.size} />,
  },
)
