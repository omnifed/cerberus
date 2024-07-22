import figma from '@figma/code-connect'
import { DataRegular } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  DataRegular,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1215',

  {
    imports: ["import { DataRegular } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <DataRegular size={props.size} />,
  },
)
