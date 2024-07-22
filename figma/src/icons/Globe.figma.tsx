import figma from '@figma/code-connect'
import { Globe } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Globe,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-1178',

  {
    imports: ["import { Globe } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Globe size={props.size} />,
  },
)
