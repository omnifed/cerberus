import figma from '@figma/code-connect'
import { DirectionCurveFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DirectionCurveFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1852',

  {
    imports: ["import { DirectionCurveFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DirectionCurveFilled size={props.size} />,
  },
)
