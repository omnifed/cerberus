import figma from '@figma/code-connect'
import { Monster } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Monster,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1069',

  {
    imports: ["import { Monster } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Monster size={props.size} />,
  },
)
