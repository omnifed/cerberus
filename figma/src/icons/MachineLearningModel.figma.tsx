import figma from '@figma/code-connect'
import { MachineLearningModel } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MachineLearningModel,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-32',

  {
    imports: ["import { MachineLearningModel } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MachineLearningModel size={props.size} />,
  },
)
