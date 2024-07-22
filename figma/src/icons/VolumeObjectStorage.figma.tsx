import figma from '@figma/code-connect'
import { VolumeObjectStorage } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeObjectStorage,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-26',

  {
    imports: ["import { VolumeObjectStorage } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeObjectStorage size={props.size} />,
  },
)
