import figma from '@figma/code-connect'
import { TemperatureMin } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TemperatureMin,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-529',

  {
    imports: ["import { TemperatureMin } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TemperatureMin size={props.size} />,
  },
)
