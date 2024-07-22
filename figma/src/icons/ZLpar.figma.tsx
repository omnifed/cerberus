import figma from '@figma/code-connect'
import { ZLpar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZLpar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-98',

  {
    imports: ["import { ZLpar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZLpar size={props.size} />,
  },
)
