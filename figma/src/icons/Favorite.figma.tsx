import figma from '@figma/code-connect'
import { Favorite } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Favorite,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36449',

  {
    imports: ["import { Favorite } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Favorite size={props.size} />,
  },
)
