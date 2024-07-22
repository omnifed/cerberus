import figma from '@figma/code-connect'
import { TextSubscript } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextSubscript,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-35',

  {
    imports: ["import { TextSubscript } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextSubscript size={props.size} />,
  },
)
