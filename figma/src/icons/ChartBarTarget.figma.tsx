import figma from '@figma/code-connect'
import { ChartBarTarget } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChartBarTarget,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-617',

  {
    imports: ["import { ChartBarTarget } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChartBarTarget size={props.size} />,
  },
)
