import figma from '@figma/code-connect'
import { Cloudy } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cloudy,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-955',

  {
    imports: ["import { Cloudy } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cloudy size={props.size} />,
  },
)
