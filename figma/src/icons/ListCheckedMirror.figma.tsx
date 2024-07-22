import figma from '@figma/code-connect'
import { ListCheckedMirror } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ListCheckedMirror,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-153',

  {
    imports: ["import { ListCheckedMirror } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ListCheckedMirror size={props.size} />,
  },
)
