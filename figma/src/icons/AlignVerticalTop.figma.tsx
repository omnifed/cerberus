import figma from '@figma/code-connect'
import { AlignVerticalTop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignVerticalTop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-24',

  {
    imports: ["import { AlignVerticalTop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignVerticalTop size={props.size} />,
  },
)
