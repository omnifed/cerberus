import figma from '@figma/code-connect'
import { TropicalStormModelTracks } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TropicalStormModelTracks,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-477',

  {
    imports: ["import { TropicalStormModelTracks } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TropicalStormModelTracks size={props.size} />,
  },
)
