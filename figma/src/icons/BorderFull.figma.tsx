import figma from '@figma/code-connect'
import { BorderFull } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  BorderFull,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-26',

  {
    imports: ["import { BorderFull } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <BorderFull size={props.size} />,
  },
)
