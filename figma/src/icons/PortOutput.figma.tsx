import figma from '@figma/code-connect'
import { PortOutput } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PortOutput,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-156',

  {
    imports: ["import { PortOutput } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PortOutput size={props.size} />,
  },
)
