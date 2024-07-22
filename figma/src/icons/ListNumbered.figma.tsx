import figma from '@figma/code-connect'
import { ListNumbered } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ListNumbered,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-296',

  {
    imports: ["import { ListNumbered } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ListNumbered size={props.size} />,
  },
)
