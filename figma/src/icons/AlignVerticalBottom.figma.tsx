import figma from '@figma/code-connect'
import { AlignVerticalBottom } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  AlignVerticalBottom,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9472-18',

  {
    imports: ["import { AlignVerticalBottom } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <AlignVerticalBottom size={props.size} />,
  },
)
