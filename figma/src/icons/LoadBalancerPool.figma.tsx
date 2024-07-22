import figma from '@figma/code-connect'
import { LoadBalancerPool } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LoadBalancerPool,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-275',

  {
    imports: ["import { LoadBalancerPool } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LoadBalancerPool size={props.size} />,
  },
)
