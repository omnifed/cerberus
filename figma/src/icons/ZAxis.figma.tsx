import figma from '@figma/code-connect'
import { ZAxis } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZAxis,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9607-21',

  {
    imports: ["import { ZAxis } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZAxis size={props.size} />,
  },
)
