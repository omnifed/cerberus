import figma from '@figma/code-connect'
import { PlayOutlineFilled } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  PlayOutlineFilled,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9315-35142',

  {
    imports: ["import { PlayOutlineFilled } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <PlayOutlineFilled size={props.size} />,
  },
)
