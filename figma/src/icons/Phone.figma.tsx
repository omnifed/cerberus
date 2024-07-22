import figma from '@figma/code-connect'
import { Phone } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Phone,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9602-36515',

  {
    imports: ["import { Phone } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Phone size={props.size} />,
  },
)
