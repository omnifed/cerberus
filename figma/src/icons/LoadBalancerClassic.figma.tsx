import figma from '@figma/code-connect'
import { LoadBalancerClassic } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  LoadBalancerClassic,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9693-260',

  {
    imports: ["import { LoadBalancerClassic } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <LoadBalancerClassic size={props.size} />,
  },
)
