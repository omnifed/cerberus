import figma from '@figma/code-connect'
import { ChoroplethMap } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ChoroplethMap,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-761',

  {
    imports: ["import { ChoroplethMap } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ChoroplethMap size={props.size} />,
  },
)
