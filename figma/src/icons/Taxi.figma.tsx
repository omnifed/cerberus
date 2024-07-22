import figma from '@figma/code-connect'
import { Taxi } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Taxi,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-979',

  {
    imports: ["import { Taxi } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Taxi size={props.size} />,
  },
)
