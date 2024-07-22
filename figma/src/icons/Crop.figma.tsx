import figma from '@figma/code-connect'
import { Crop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Crop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-189',

  {
    imports: ["import { Crop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Crop size={props.size} />,
  },
)
