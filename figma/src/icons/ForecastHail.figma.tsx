import figma from '@figma/code-connect'
import { ForecastHail } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ForecastHail,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-922',

  {
    imports: ["import { ForecastHail } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ForecastHail size={props.size} />,
  },
)
