import figma from '@figma/code-connect'
import { RouterWifi } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  RouterWifi,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-332',

  {
    imports: ["import { RouterWifi } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <RouterWifi size={props.size} />,
  },
)
