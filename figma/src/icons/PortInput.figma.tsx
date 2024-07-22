import figma from '@figma/code-connect'
import { PortInput } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PortInput,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-153',

  {
    imports: ["import { PortInput } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PortInput size={props.size} />,
  },
)
