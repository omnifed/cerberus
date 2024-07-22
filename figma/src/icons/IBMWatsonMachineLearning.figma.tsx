import figma from '@figma/code-connect'
import { IBMWatsonMachineLearning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonMachineLearning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-94',

  {
    imports: ["import { IBMWatsonMachineLearning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonMachineLearning size={props.size} />,
  },
)
