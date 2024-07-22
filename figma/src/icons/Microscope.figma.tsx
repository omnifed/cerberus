import figma from '@figma/code-connect'
import { Microscope } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Microscope,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9617-27',

  {
    imports: ["import { Microscope } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Microscope size={props.size} />,
  },
)
