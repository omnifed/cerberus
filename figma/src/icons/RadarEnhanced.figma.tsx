import figma from '@figma/code-connect'
import { RadarEnhanced } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RadarEnhanced,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-768',

  {
    imports: ["import { RadarEnhanced } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RadarEnhanced size={props.size} />,
  },
)
