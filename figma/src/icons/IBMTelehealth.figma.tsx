import figma from '@figma/code-connect'
import { IBMTelehealth } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMTelehealth,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-133',

  {
    imports: ["import { IBMTelehealth } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMTelehealth size={props.size} />,
  },
)
