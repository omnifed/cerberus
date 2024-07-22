import figma from '@figma/code-connect'
import { PageLast } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PageLast,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4169',

  {
    imports: ["import { PageLast } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PageLast size={props.size} />,
  },
)
