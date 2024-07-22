import figma from '@figma/code-connect'
import { MarineWarning } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MarineWarning,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-833',

  {
    imports: ["import { MarineWarning } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MarineWarning size={props.size} />,
  },
)
