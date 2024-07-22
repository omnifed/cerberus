import figma from '@figma/code-connect'
import { ThunderstormStrong } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThunderstormStrong,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-511',

  {
    imports: ["import { ThunderstormStrong } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThunderstormStrong size={props.size} />,
  },
)
