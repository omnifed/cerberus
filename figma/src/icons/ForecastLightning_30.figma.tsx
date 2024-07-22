import figma from '@figma/code-connect'
import { ForecastLightning_30 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ForecastLightning_30,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-913',

  {
    imports: ["import { ForecastLightning_30 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ForecastLightning_30 size={props.size} />,
  },
)
