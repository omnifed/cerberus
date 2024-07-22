import figma from '@figma/code-connect'
import { ApplicationWeb } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ApplicationWeb,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-14',

  {
    imports: ["import { ApplicationWeb } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ApplicationWeb size={props.size} />,
  },
)
