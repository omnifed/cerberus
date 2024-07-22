import figma from '@figma/code-connect'
import { Calibrate } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Calibrate,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-12',

  {
    imports: ["import { Calibrate } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Calibrate size={props.size} />,
  },
)
