import figma from '@figma/code-connect'
import { TextFootnote } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextFootnote,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-542',

  {
    imports: ["import { TextFootnote } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextFootnote size={props.size} />,
  },
)
