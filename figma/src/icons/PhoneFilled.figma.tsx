import figma from '@figma/code-connect'
import { PhoneFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PhoneFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36527',

  {
    imports: ["import { PhoneFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PhoneFilled size={props.size} />,
  },
)
