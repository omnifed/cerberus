import figma from '@figma/code-connect'
import { SkipBackSolidFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SkipBackSolidFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35208',

  {
    imports: ["import { SkipBackSolidFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SkipBackSolidFilled size={props.size} />,
  },
)
