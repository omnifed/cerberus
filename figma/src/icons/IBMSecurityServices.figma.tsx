import figma from '@figma/code-connect'
import { IBMSecurityServices } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMSecurityServices,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1326',

  {
    imports: ["import { IBMSecurityServices } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMSecurityServices size={props.size} />,
  },
)
