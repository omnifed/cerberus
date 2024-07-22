import figma from '@figma/code-connect'
import { CurrencyYen } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CurrencyYen,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1024',

  {
    imports: ["import { CurrencyYen } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CurrencyYen size={props.size} />,
  },
)
