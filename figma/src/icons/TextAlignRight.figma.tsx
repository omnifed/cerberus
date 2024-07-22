import figma from '@figma/code-connect'
import { TextAlignRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextAlignRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-518',

  {
    imports: ["import { TextAlignRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextAlignRight size={props.size} />,
  },
)
