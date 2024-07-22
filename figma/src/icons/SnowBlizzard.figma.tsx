import figma from '@figma/code-connect'
import { SnowBlizzard } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SnowBlizzard,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-614',

  {
    imports: ["import { SnowBlizzard } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SnowBlizzard size={props.size} />,
  },
)
