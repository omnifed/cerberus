import figma from '@figma/code-connect'
import { SoilTemperatureField } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SoilTemperatureField,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-584',

  {
    imports: ["import { SoilTemperatureField } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SoilTemperatureField size={props.size} />,
  },
)
