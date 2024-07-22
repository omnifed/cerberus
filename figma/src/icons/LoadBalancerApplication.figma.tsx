import figma from '@figma/code-connect'
import { LoadBalancerApplication } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LoadBalancerApplication,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-257',

  {
    imports: ["import { LoadBalancerApplication } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LoadBalancerApplication size={props.size} />,
  },
)
