import figma from '@figma/code-connect'
import { ProgressBar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ProgressBar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1038',

  {
    imports: ["import { ProgressBar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ProgressBar size={props.size} />,
  },
)
