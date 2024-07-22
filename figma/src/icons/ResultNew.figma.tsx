import figma from '@figma/code-connect'
import { ResultNew } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ResultNew,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1224',

  {
    imports: ["import { ResultNew } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ResultNew size={props.size} />,
  },
)
