import figma from '@figma/code-connect'
import { CategoryNew } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CategoryNew,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-44',

  {
    imports: ["import { CategoryNew } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CategoryNew size={props.size} />,
  },
)
