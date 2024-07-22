import figma from '@figma/code-connect'
import { EmailNew } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  EmailNew,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-727',

  {
    imports: ["import { EmailNew } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <EmailNew size={props.size} />,
  },
)
