import figma from '@figma/code-connect'
import { ThumbsDown } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThumbsDown,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-51',

  {
    imports: ["import { ThumbsDown } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThumbsDown size={props.size} />,
  },
)
