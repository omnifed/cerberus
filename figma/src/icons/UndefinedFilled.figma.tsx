import figma from '@figma/code-connect'
import { UndefinedFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UndefinedFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-254',

  {
    imports: ["import { UndefinedFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UndefinedFilled size={props.size} />,
  },
)
