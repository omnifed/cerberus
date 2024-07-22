import figma from '@figma/code-connect'
import { StoragePool } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  StoragePool,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1098',

  {
    imports: ["import { StoragePool } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <StoragePool size={props.size} />,
  },
)
