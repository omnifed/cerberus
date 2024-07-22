import figma from '@figma/code-connect'
import { ScanDisabled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ScanDisabled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-188',

  {
    imports: ["import { ScanDisabled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ScanDisabled size={props.size} />,
  },
)
