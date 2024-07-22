import figma from '@figma/code-connect'
import { ShrinkScreen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ShrinkScreen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35187',

  {
    imports: ["import { ShrinkScreen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ShrinkScreen size={props.size} />,
  },
)
