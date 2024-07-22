import figma from '@figma/code-connect'
import { Voicemail } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Voicemail,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9630-129',

  {
    imports: ["import { Voicemail } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Voicemail size={props.size} />,
  },
)
