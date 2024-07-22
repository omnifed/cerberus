import figma from '@figma/code-connect'
import { WatsonHealth3DCurveAutoColon } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealth3DCurveAutoColon,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1945',

  {
    imports: ["import { WatsonHealth3DCurveAutoColon } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealth3DCurveAutoColon size={props.size} />,
  },
)
