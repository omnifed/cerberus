import figma from '@figma/code-connect'
import { Category } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Category,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-35',

  {
    imports: ["import { Category } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Category size={props.size} />,
  },
)
