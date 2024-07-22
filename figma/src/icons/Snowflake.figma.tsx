import figma from '@figma/code-connect'
import { Snowflake } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Snowflake,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9391-599',

  {
    imports: ["import { Snowflake } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Snowflake size={props.size} />,
  },
)
