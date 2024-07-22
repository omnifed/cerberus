import figma from '@figma/code-connect'
import { Help } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Help,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-228',

  {
    imports: ["import { Help } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Help size={props.size} />,
  },
)
