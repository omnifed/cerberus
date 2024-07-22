import figma from '@figma/code-connect'
import { TextLineSpacing } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextLineSpacing,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-17',

  {
    imports: ["import { TextLineSpacing } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextLineSpacing size={props.size} />,
  },
)
