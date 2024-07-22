import figma from '@figma/code-connect'
import { SoilTemperatureGlobal } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SoilTemperatureGlobal,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-581',

  {
    imports: ["import { SoilTemperatureGlobal } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SoilTemperatureGlobal size={props.size} />,
  },
)
