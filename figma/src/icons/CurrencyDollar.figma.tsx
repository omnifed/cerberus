import figma from '@figma/code-connect'
import { CurrencyDollar } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CurrencyDollar,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-998',

  {
    imports: ["import { CurrencyDollar } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CurrencyDollar size={props.size} />,
  },
)
