import figma from '@figma/code-connect'
import { HintonPlot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HintonPlot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-681',

  {
    imports: ["import { HintonPlot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HintonPlot size={props.size} />,
  },
)
