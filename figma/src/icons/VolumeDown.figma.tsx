import figma from '@figma/code-connect'
import { VolumeDown } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeDown,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35250',

  {
    imports: ["import { VolumeDown } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeDown size={props.size} />,
  },
)
