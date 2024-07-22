import figma from '@figma/code-connect'
import { DrillBack } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DrillBack,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-2',

  {
    imports: ["import { DrillBack } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DrillBack size={props.size} />,
  },
)
