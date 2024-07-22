import figma from '@figma/code-connect'
import { ThunderstormScatteredNight } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThunderstormScatteredNight,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-517',

  {
    imports: ["import { ThunderstormScatteredNight } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThunderstormScatteredNight size={props.size} />,
  },
)
