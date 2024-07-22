import figma from '@figma/code-connect'
import { CharacterLowerCase } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CharacterLowerCase,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9269-802',

  {
    imports: ["import { CharacterLowerCase } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CharacterLowerCase size={props.size} />,
  },
)
