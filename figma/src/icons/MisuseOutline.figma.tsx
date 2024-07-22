import figma from '@figma/code-connect'
import { MisuseOutline } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MisuseOutline,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-249',

  {
    imports: ["import { MisuseOutline } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MisuseOutline size={props.size} />,
  },
)
