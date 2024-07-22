import figma from '@figma/code-connect'
import { ThumbsDownFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThumbsDownFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-54',

  {
    imports: ["import { ThumbsDownFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThumbsDownFilled size={props.size} />,
  },
)
