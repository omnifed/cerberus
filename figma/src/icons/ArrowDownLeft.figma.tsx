import figma from '@figma/code-connect'
import { ArrowDownLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowDownLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9266-1158',

  {
    imports: ["import { ArrowDownLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowDownLeft size={props.size} />,
  },
)
