import figma from '@figma/code-connect'
import { Paragraph } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Paragraph,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-323',

  {
    imports: ["import { Paragraph } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Paragraph size={props.size} />,
  },
)
