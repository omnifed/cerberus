import figma from '@figma/code-connect'
import { TextVerticalAlignment } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextVerticalAlignment,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-47',

  {
    imports: ["import { TextVerticalAlignment } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextVerticalAlignment size={props.size} />,
  },
)
