import figma from '@figma/code-connect'
import { StarHalf } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StarHalf,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-42',

  {
    imports: ["import { StarHalf } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StarHalf size={props.size} />,
  },
)
