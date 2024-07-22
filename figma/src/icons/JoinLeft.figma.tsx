import figma from '@figma/code-connect'
import { JoinLeft } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  JoinLeft,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-968',

  {
    imports: ["import { JoinLeft } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <JoinLeft size={props.size} />,
  },
)
