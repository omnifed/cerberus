import figma from '@figma/code-connect'
import { Result } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Result,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1221',

  {
    imports: ["import { Result } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Result size={props.size} />,
  },
)
