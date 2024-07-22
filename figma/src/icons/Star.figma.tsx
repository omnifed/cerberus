import figma from '@figma/code-connect'
import { Star } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Star,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9603-35',

  {
    imports: ["import { Star } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Star size={props.size} />,
  },
)
