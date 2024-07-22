import figma from '@figma/code-connect'
import { TextWrap } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextWrap,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-50',

  {
    imports: ["import { TextWrap } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextWrap size={props.size} />,
  },
)
