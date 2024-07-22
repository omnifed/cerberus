import figma from '@figma/code-connect'
import { VolumeUpAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeUpAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35271',

  {
    imports: ["import { VolumeUpAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeUpAlt size={props.size} />,
  },
)
