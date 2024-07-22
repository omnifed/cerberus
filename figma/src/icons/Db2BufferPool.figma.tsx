import figma from '@figma/code-connect'
import { Db2BufferPool } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Db2BufferPool,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9698-74',

  {
    imports: ["import { Db2BufferPool } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Db2BufferPool size={props.size} />,
  },
)
