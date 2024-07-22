import figma from '@figma/code-connect'
import { Catalog } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Catalog,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-29',

  {
    imports: ["import { Catalog } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Catalog size={props.size} />,
  },
)
