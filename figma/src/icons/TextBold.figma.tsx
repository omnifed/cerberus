import figma from '@figma/code-connect'
import { TextBold } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextBold,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-524',

  {
    imports: ["import { TextBold } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextBold size={props.size} />,
  },
)
