import figma from '@figma/code-connect'
import { ListBoxes } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ListBoxes,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-287',

  {
    imports: ["import { ListBoxes } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ListBoxes size={props.size} />,
  },
)
