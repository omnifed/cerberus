import figma from '@figma/code-connect'
import { Strawberry } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Strawberry,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1131',

  {
    imports: ["import { Strawberry } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Strawberry size={props.size} />,
  },
)
