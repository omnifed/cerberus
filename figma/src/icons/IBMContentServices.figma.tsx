import figma from '@figma/code-connect'
import { IBMContentServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMContentServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-124',

  {
    imports: ["import { IBMContentServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMContentServices size={props.size} />,
  },
)
