import figma from '@figma/code-connect'
import { QqPlot } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  QqPlot,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1044',

  {
    imports: ["import { QqPlot } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <QqPlot size={props.size} />,
  },
)
