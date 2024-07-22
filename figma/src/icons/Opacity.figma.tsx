import figma from '@figma/code-connect'
import { Opacity } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Opacity,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-308',

  {
    imports: ["import { Opacity } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Opacity size={props.size} />,
  },
)
