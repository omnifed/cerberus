import figma from '@figma/code-connect'
import { ButtonFlushLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ButtonFlushLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-165',

  {
    imports: ["import { ButtonFlushLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ButtonFlushLeft size={props.size} />,
  },
)
