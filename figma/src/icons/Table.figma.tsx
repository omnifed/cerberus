import figma from '@figma/code-connect'
import { Table } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Table,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1116',

  {
    imports: ["import { Table } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Table size={props.size} />,
  },
)
