import figma from '@figma/code-connect'
import { GenderMale } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GenderMale,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9426-1721',

  {
    imports: ["import { GenderMale } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GenderMale size={props.size} />,
  },
)
