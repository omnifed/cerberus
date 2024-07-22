import figma from '@figma/code-connect'
import { Id } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Id,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9626-682',

  {
    imports: ["import { Id } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Id size={props.size} />,
  },
)
