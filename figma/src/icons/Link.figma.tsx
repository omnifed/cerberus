import figma from '@figma/code-connect'
import { Link } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Link,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-282',

  {
    imports: ["import { Link } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Link size={props.size} />,
  },
)
