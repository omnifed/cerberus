import figma from '@figma/code-connect'
import { GameConsole } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GameConsole,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-748',

  {
    imports: ["import { GameConsole } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GameConsole size={props.size} />,
  },
)
