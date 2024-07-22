import figma from '@figma/code-connect'
import { TextClearFormat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextClearFormat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-527',

  {
    imports: ["import { TextClearFormat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextClearFormat size={props.size} />,
  },
)
