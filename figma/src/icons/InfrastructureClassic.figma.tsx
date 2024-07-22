import figma from '@figma/code-connect'
import { InfrastructureClassic } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InfrastructureClassic,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1341',

  {
    imports: ["import { InfrastructureClassic } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InfrastructureClassic size={props.size} />,
  },
)
