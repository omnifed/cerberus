import figma from '@figma/code-connect'
import { TextTracking } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextTracking,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-41',

  {
    imports: ["import { TextTracking } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextTracking size={props.size} />,
  },
)
