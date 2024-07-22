import figma from '@figma/code-connect'
import { IBMDatastage } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMDatastage,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-9',

  {
    imports: ["import { IBMDatastage } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMDatastage size={props.size} />,
  },
)
