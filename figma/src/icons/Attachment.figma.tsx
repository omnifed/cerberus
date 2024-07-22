import figma from '@figma/code-connect'
import { Attachment } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Attachment,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-20',

  {
    imports: ["import { Attachment } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Attachment size={props.size} />,
  },
)
