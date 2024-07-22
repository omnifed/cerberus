import figma from '@figma/code-connect'
import { MostlyCloudyNight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MostlyCloudyNight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-798',

  {
    imports: ["import { MostlyCloudyNight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MostlyCloudyNight size={props.size} />,
  },
)
