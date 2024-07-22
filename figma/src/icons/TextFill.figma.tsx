import figma from '@figma/code-connect'
import { TextFill } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextFill,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-536',

  {
    imports: ["import { TextFill } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextFill size={props.size} />,
  },
)
