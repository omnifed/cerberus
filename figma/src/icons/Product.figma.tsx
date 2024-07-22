import figma from '@figma/code-connect'
import { Product } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Product,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1215',

  {
    imports: ["import { Product } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Product size={props.size} />,
  },
)
