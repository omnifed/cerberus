import figma from '@figma/code-connect'
import { AugmentedReality } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AugmentedReality,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9622-278',

  {
    imports: ["import { AugmentedReality } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AugmentedReality size={props.size} />,
  },
)
