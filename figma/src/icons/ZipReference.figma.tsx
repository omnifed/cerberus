import figma from '@figma/code-connect'
import { ZipReference } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ZipReference,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1354',

  {
    imports: ["import { ZipReference } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ZipReference size={props.size} />,
  },
)
