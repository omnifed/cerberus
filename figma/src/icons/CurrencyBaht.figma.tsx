import figma from '@figma/code-connect'
import { CurrencyBaht } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CurrencyBaht,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-995',

  {
    imports: ["import { CurrencyBaht } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CurrencyBaht size={props.size} />,
  },
)
