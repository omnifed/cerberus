import figma from '@figma/code-connect'
import { GameWireless } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GameWireless,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-751',

  {
    imports: ["import { GameWireless } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GameWireless size={props.size} />,
  },
)
