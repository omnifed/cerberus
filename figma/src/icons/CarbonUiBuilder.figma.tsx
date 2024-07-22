import figma from '@figma/code-connect'
import { CarbonUiBuilder } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CarbonUiBuilder,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9614-3316',

  {
    imports: ["import { CarbonUiBuilder } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CarbonUiBuilder size={props.size} />,
  },
)
