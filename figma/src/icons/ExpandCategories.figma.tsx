import figma from '@figma/code-connect'
import { ExpandCategories } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ExpandCategories,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-7',

  {
    imports: ["import { ExpandCategories } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ExpandCategories size={props.size} />,
  },
)
