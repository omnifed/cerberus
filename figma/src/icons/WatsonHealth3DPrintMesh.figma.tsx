import figma from '@figma/code-connect'
import { WatsonHealth3DPrintMesh } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WatsonHealth3DPrintMesh,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9553-1961',

  {
    imports: ["import { WatsonHealth3DPrintMesh } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WatsonHealth3DPrintMesh size={props.size} />,
  },
)
