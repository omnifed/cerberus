import figma from '@figma/code-connect'
import { NotAvailable } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  NotAvailable,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-795',

  {
    imports: ["import { NotAvailable } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <NotAvailable size={props.size} />,
  },
)
