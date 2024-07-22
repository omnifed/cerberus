import figma from '@figma/code-connect'
import { Map } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Map,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1111',

  {
    imports: ["import { Map } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Map size={props.size} />,
  },
)
