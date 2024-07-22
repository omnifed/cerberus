import figma from '@figma/code-connect'
import { MeterAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MeterAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-24',

  {
    imports: ["import { MeterAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MeterAlt size={props.size} />,
  },
)
