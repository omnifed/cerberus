import figma from '@figma/code-connect'
import { At } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  At,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-272',

  {
    imports: ["import { At } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <At size={props.size} />,
  },
)
