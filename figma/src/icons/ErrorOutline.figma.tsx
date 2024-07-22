import figma from '@figma/code-connect'
import { ErrorOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ErrorOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-227',

  {
    imports: ["import { ErrorOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ErrorOutline size={props.size} />,
  },
)
