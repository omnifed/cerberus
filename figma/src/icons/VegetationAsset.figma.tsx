import figma from '@figma/code-connect'
import { VegetationAsset } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  VegetationAsset,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-427',

  {
    imports: ["import { VegetationAsset } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <VegetationAsset size={props.size} />,
  },
)
