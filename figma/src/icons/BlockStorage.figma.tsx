import figma from '@figma/code-connect'
import { BlockStorage } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BlockStorage,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1206',

  {
    imports: ["import { BlockStorage } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BlockStorage size={props.size} />,
  },
)
