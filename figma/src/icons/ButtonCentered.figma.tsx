import figma from '@figma/code-connect'
import { ButtonCentered } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ButtonCentered,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-162',

  {
    imports: ["import { ButtonCentered } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ButtonCentered size={props.size} />,
  },
)
