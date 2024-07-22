import figma from '@figma/code-connect'
import { IBMPrivatePathServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMPrivatePathServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-169',

  {
    imports: ["import { IBMPrivatePathServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMPrivatePathServices size={props.size} />,
  },
)
