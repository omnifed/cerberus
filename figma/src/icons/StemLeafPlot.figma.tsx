import figma from '@figma/code-connect'
import { StemLeafPlot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StemLeafPlot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1095',

  {
    imports: ["import { StemLeafPlot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StemLeafPlot size={props.size} />,
  },
)
