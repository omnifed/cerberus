import figma from '@figma/code-connect'
import { MusicRemove } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MusicRemove,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1170',

  {
    imports: ["import { MusicRemove } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MusicRemove size={props.size} />,
  },
)
