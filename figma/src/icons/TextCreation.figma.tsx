import figma from '@figma/code-connect'
import { TextCreation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextCreation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-533',

  {
    imports: ["import { TextCreation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextCreation size={props.size} />,
  },
)
