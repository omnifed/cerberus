import figma from '@figma/code-connect'
import { InformationFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  InformationFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9266-591',

  {
    imports: ["import { InformationFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <InformationFilled size={props.size} />,
  },
)
