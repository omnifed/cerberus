import figma from '@figma/code-connect'
import { VolumeDownFilledAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeDownFilledAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35259',

  {
    imports: ["import { VolumeDownFilledAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeDownFilledAlt size={props.size} />,
  },
)
