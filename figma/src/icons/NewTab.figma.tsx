import figma from '@figma/code-connect'
import { NewTab } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NewTab,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-152',

  {
    imports: ["import { NewTab } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NewTab size={props.size} />,
  },
)
