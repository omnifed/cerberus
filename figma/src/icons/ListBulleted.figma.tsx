import figma from '@figma/code-connect'
import { ListBulleted } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ListBulleted,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-290',

  {
    imports: ["import { ListBulleted } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ListBulleted size={props.size} />,
  },
)
