import figma from '@figma/code-connect'
import { JoinFull } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  JoinFull,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-962',

  {
    imports: ["import { JoinFull } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <JoinFull size={props.size} />,
  },
)
