import figma from '@figma/code-connect'
import { VolumeDownFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeDownFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35256',

  {
    imports: ["import { VolumeDownFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeDownFilled size={props.size} />,
  },
)
