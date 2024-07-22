import figma from '@figma/code-connect'
import { LogoPinterest } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LogoPinterest,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9656-360',

  {
    imports: ["import { LogoPinterest } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LogoPinterest size={props.size} />,
  },
)
