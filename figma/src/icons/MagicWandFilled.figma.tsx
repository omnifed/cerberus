import figma from '@figma/code-connect'
import { MagicWandFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MagicWandFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-302',

  {
    imports: ["import { MagicWandFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MagicWandFilled size={props.size} />,
  },
)
