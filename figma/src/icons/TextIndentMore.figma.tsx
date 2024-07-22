import figma from '@figma/code-connect'
import { TextIndentMore } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextIndentMore,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-5',

  {
    imports: ["import { TextIndentMore } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextIndentMore size={props.size} />,
  },
)
