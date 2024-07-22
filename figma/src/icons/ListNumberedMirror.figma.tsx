import figma from '@figma/code-connect'
import { ListNumberedMirror } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ListNumberedMirror,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-156',

  {
    imports: ["import { ListNumberedMirror } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ListNumberedMirror size={props.size} />,
  },
)
