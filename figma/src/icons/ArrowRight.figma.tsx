import figma from '@figma/code-connect'
import { ArrowRight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ArrowRight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9018-8974',

  {
    imports: ["import { ArrowRight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ArrowRight size={props.size} />,
  },
)
