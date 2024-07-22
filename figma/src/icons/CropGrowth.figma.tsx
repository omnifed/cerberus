import figma from '@figma/code-connect'
import { CropGrowth } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CropGrowth,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-952',

  {
    imports: ["import { CropGrowth } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CropGrowth size={props.size} />,
  },
)
