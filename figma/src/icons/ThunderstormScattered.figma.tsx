import figma from '@figma/code-connect'
import { ThunderstormScattered } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ThunderstormScattered,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-520',

  {
    imports: ["import { ThunderstormScattered } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ThunderstormScattered size={props.size} />,
  },
)
