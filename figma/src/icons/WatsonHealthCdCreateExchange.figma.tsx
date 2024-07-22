import figma from '@figma/code-connect'
import { WatsonHealthCdCreateExchange } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthCdCreateExchange,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-44',

  {
    imports: ["import { WatsonHealthCdCreateExchange } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthCdCreateExchange size={props.size} />,
  },
)
