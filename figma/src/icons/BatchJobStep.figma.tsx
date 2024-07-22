import figma from '@figma/code-connect'
import { BatchJobStep } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BatchJobStep,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-53',

  {
    imports: ["import { BatchJobStep } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BatchJobStep size={props.size} />,
  },
)
