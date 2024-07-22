import figma from '@figma/code-connect'
import { ThumbsUp } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThumbsUp,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-57',

  {
    imports: ["import { ThumbsUp } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThumbsUp size={props.size} />,
  },
)
