import figma from '@figma/code-connect'
import { WatsonHealthContourEdit } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthContourEdit,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-63',

  {
    imports: ["import { WatsonHealthContourEdit } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthContourEdit size={props.size} />,
  },
)
