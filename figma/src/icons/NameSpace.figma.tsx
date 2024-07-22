import figma from '@figma/code-connect'
import { NameSpace } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NameSpace,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-995',

  {
    imports: ["import { NameSpace } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NameSpace size={props.size} />,
  },
)
