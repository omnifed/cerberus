import figma from '@figma/code-connect'
import { TextLeading } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextLeading,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-14',

  {
    imports: ["import { TextLeading } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextLeading size={props.size} />,
  },
)
