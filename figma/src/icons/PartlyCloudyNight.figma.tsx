import figma from '@figma/code-connect'
import { PartlyCloudyNight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PartlyCloudyNight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-780',

  {
    imports: ["import { PartlyCloudyNight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PartlyCloudyNight size={props.size} />,
  },
)
