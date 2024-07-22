import figma from '@figma/code-connect'
import { ArrowLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9018-8977',

  {
    imports: ["import { ArrowLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowLeft size={props.size} />,
  },
)
