import figma from '@figma/code-connect'
import { PageNumber } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PageNumber,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-314',

  {
    imports: ["import { PageNumber } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PageNumber size={props.size} />,
  },
)
