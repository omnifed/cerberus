import figma from '@figma/code-connect'
import { DatabaseRedis } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DatabaseRedis,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9277-1260',

  {
    imports: ["import { DatabaseRedis } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DatabaseRedis size={props.size} />,
  },
)
