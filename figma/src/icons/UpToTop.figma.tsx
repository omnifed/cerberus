import figma from '@figma/code-connect'
import { UpToTop } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  UpToTop,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9343-4174',

  {
    imports: ["import { UpToTop } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <UpToTop size={props.size} />,
  },
)
