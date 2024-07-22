import figma from '@figma/code-connect'
import { CheckmarkOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CheckmarkOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-215',

  {
    imports: ["import { CheckmarkOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CheckmarkOutline size={props.size} />,
  },
)
