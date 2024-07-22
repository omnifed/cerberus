import figma from '@figma/code-connect'
import { BrightnessContrast } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BrightnessContrast,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-153',

  {
    imports: ["import { BrightnessContrast } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BrightnessContrast size={props.size} />,
  },
)
