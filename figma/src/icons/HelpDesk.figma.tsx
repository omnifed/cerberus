import figma from '@figma/code-connect'
import { HelpDesk } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  HelpDesk,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1169',

  {
    imports: ["import { HelpDesk } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <HelpDesk size={props.size} />,
  },
)
