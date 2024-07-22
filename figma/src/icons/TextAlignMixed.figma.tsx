import figma from '@figma/code-connect'
import { TextAlignMixed } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TextAlignMixed,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9517-515',

  {
    imports: ["import { TextAlignMixed } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TextAlignMixed size={props.size} />,
  },
)
