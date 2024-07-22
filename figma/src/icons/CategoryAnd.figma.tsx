import figma from '@figma/code-connect'
import { CategoryAnd } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CategoryAnd,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-41',

  {
    imports: ["import { CategoryAnd } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CategoryAnd size={props.size} />,
  },
)
