import figma from '@figma/code-connect'
import { WatsonHealthDicom_6000 } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealthDicom_6000,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9560-81',

  {
    imports: ["import { WatsonHealthDicom_6000 } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealthDicom_6000 size={props.size} />,
  },
)
