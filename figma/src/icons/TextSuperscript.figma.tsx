import figma from '@figma/code-connect'
import { TextSuperscript } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextSuperscript,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-38',

  {
    imports: ["import { TextSuperscript } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextSuperscript size={props.size} />,
  },
)
