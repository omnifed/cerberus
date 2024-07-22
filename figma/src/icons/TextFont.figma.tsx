import figma from '@figma/code-connect'
import { TextFont } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextFont,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-539',

  {
    imports: ["import { TextFont } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextFont size={props.size} />,
  },
)
