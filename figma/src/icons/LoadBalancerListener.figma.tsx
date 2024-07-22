import figma from '@figma/code-connect'
import { LoadBalancerListener } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LoadBalancerListener,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-266',

  {
    imports: ["import { LoadBalancerListener } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LoadBalancerListener size={props.size} />,
  },
)
