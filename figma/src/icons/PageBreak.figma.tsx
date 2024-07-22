import figma from '@figma/code-connect'
import { PageBreak } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PageBreak,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-311',

  {
    imports: ["import { PageBreak } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PageBreak size={props.size} />,
  },
)
