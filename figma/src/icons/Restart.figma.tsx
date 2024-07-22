import figma from '@figma/code-connect'
import { Restart } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Restart,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-178',

  {
    imports: ["import { Restart } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Restart size={props.size} />,
  },
)
