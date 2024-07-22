import figma from '@figma/code-connect'
import { Terminal_3270 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Terminal_3270,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-372',

  {
    imports: ["import { Terminal_3270 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Terminal_3270 size={props.size} />,
  },
)
