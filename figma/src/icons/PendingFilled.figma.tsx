import figma from '@figma/code-connect'
import { PendingFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PendingFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-251',

  {
    imports: ["import { PendingFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PendingFilled size={props.size} />,
  },
)
