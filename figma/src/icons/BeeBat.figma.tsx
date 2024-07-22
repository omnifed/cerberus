import figma from '@figma/code-connect'
import { BeeBat } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BeeBat,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-924',

  {
    imports: ["import { BeeBat } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BeeBat size={props.size} />,
  },
)
