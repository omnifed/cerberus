import figma from '@figma/code-connect'
import { DecisionTree } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DecisionTree,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-890',

  {
    imports: ["import { DecisionTree } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DecisionTree size={props.size} />,
  },
)
