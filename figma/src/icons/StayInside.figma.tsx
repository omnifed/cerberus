import figma from '@figma/code-connect'
import { StayInside } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StayInside,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-575',

  {
    imports: ["import { StayInside } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StayInside size={props.size} />,
  },
)
