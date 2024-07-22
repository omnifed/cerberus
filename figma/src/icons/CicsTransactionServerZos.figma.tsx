import figma from '@figma/code-connect'
import { CicsTransactionServerZos } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CicsTransactionServerZos,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-68',

  {
    imports: ["import { CicsTransactionServerZos } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CicsTransactionServerZos size={props.size} />,
  },
)
