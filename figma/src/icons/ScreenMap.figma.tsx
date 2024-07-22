import figma from '@figma/code-connect'
import { ScreenMap } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ScreenMap,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-86',

  {
    imports: ["import { ScreenMap } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ScreenMap size={props.size} />,
  },
)
