import figma from '@figma/code-connect'
import { Terminal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Terminal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-119',

  {
    imports: ["import { Terminal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Terminal size={props.size} />,
  },
)
