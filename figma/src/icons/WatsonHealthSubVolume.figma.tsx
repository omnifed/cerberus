import figma from '@figma/code-connect'
import { WatsonHealthSubVolume } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthSubVolume,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-276',

  {
    imports: ["import { WatsonHealthSubVolume } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthSubVolume size={props.size} />,
  },
)
