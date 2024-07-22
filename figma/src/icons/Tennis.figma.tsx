import figma from '@figma/code-connect'
import { Tennis } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Tennis,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1134',

  {
    imports: ["import { Tennis } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Tennis size={props.size} />,
  },
)
