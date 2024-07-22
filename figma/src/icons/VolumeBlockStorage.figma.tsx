import figma from '@figma/code-connect'
import { VolumeBlockStorage } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VolumeBlockStorage,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-20',

  {
    imports: ["import { VolumeBlockStorage } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VolumeBlockStorage size={props.size} />,
  },
)
