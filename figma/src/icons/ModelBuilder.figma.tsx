import figma from '@figma/code-connect'
import { ModelBuilder } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ModelBuilder,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-989',

  {
    imports: ["import { ModelBuilder } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ModelBuilder size={props.size} />,
  },
)
