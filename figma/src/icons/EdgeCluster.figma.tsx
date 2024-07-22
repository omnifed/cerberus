import figma from '@figma/code-connect'
import { EdgeCluster } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  EdgeCluster,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9628-712',

  {
    imports: ["import { EdgeCluster } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <EdgeCluster size={props.size} />,
  },
)
