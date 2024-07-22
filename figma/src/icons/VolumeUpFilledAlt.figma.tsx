import figma from '@figma/code-connect'
import { VolumeUpFilledAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeUpFilledAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35277',

  {
    imports: ["import { VolumeUpFilledAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeUpFilledAlt size={props.size} />,
  },
)
