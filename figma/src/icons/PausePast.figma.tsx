import figma from '@figma/code-connect'
import { PausePast } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PausePast,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-162',

  {
    imports: ["import { PausePast } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PausePast size={props.size} />,
  },
)
