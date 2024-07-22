import figma from '@figma/code-connect'
import { VolumeUp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeUp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35268',

  {
    imports: ["import { VolumeUp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeUp size={props.size} />,
  },
)
