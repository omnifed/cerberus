import figma from '@figma/code-connect'
import { PlayOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PlayOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35139',

  {
    imports: ["import { PlayOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PlayOutline size={props.size} />,
  },
)
