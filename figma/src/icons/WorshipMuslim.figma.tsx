import figma from '@figma/code-connect'
import { WorshipMuslim } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  WorshipMuslim,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-861',

  {
    imports: ["import { WorshipMuslim } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <WorshipMuslim size={props.size} />,
  },
)
