import figma from '@figma/code-connect'
import { CodeHide } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CodeHide,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-658',

  {
    imports: ["import { CodeHide } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CodeHide size={props.size} />,
  },
)
