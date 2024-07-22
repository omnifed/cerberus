import figma from '@figma/code-connect'
import { ForecastHail_30 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ForecastHail_30,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-919',

  {
    imports: ["import { ForecastHail_30 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ForecastHail_30 size={props.size} />,
  },
)
