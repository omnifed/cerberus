import figma from '@figma/code-connect'
import { Bat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-921',

  {
    imports: ["import { Bat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bat size={props.size} />,
  },
)
