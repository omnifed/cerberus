import figma from '@figma/code-connect'
import { FruitBowl } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  FruitBowl,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1051',

  {
    imports: ["import { FruitBowl } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <FruitBowl size={props.size} />,
  },
)
