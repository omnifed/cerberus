import figma from '@figma/code-connect'
import { VolumeDownAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeDownAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35253',

  {
    imports: ["import { VolumeDownAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeDownAlt size={props.size} />,
  },
)
