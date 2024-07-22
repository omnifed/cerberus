import figma from '@figma/code-connect'
import { Screen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Screen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-29',

  {
    imports: ["import { Screen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Screen size={props.size} />,
  },
)
