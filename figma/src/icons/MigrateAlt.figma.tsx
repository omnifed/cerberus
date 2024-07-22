import figma from '@figma/code-connect'
import { MigrateAlt } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  MigrateAlt,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-149',

  {
    imports: ["import { MigrateAlt } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <MigrateAlt size={props.size} />,
  },
)
