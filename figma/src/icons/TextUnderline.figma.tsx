import figma from '@figma/code-connect'
import { TextUnderline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextUnderline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-44',

  {
    imports: ["import { TextUnderline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextUnderline size={props.size} />,
  },
)
