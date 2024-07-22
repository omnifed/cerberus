import figma from '@figma/code-connect'
import { Events } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Events,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1654',

  {
    imports: ["import { Events } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Events size={props.size} />,
  },
)
