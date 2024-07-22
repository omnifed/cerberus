import figma from '@figma/code-connect'
import { ScalesTipped } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ScalesTipped,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-45',

  {
    imports: ["import { ScalesTipped } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ScalesTipped size={props.size} />,
  },
)
