import figma from '@figma/code-connect'
import { Pen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Pen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-326',

  {
    imports: ["import { Pen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Pen size={props.size} />,
  },
)
