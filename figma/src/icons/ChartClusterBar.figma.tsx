import figma from '@figma/code-connect'
import { ChartClusterBar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartClusterBar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-632',

  {
    imports: ["import { ChartClusterBar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartClusterBar size={props.size} />,
  },
)
