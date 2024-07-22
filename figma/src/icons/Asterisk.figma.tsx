import figma from '@figma/code-connect'
import { Asterisk } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Asterisk,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-17',

  {
    imports: ["import { Asterisk } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Asterisk size={props.size} />,
  },
)
