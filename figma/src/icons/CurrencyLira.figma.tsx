import figma from '@figma/code-connect'
import { CurrencyLira } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CurrencyLira,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9301-1004',

  {
    imports: ["import { CurrencyLira } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CurrencyLira size={props.size} />,
  },
)
