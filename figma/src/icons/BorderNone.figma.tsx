import figma from '@figma/code-connect'
import { BorderNone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BorderNone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-32',

  {
    imports: ["import { BorderNone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BorderNone size={props.size} />,
  },
)
