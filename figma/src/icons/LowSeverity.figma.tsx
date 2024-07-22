import figma from '@figma/code-connect'
import { LowSeverity } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LowSeverity,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-247',

  {
    imports: ["import { LowSeverity } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LowSeverity size={props.size} />,
  },
)
