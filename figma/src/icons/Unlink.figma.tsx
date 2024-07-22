import figma from '@figma/code-connect'
import { Unlink } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Unlink,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9519-147',

  {
    imports: ["import { Unlink } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Unlink size={props.size} />,
  },
)
