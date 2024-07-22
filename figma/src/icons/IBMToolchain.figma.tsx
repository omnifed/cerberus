import figma from '@figma/code-connect'
import { IBMToolchain } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMToolchain,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-139',

  {
    imports: ["import { IBMToolchain } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMToolchain size={props.size} />,
  },
)
