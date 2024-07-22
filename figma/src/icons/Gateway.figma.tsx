import figma from '@figma/code-connect'
import { Gateway } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Gateway,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-164',

  {
    imports: ["import { Gateway } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Gateway size={props.size} />,
  },
)
