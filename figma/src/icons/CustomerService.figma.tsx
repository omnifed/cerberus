import figma from '@figma/code-connect'
import { CustomerService } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  CustomerService,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-961',

  {
    imports: ["import { CustomerService } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <CustomerService size={props.size} />,
  },
)
