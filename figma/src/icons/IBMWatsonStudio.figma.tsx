import figma from '@figma/code-connect'
import { IBMWatsonStudio } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonStudio,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-112',

  {
    imports: ["import { IBMWatsonStudio } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonStudio size={props.size} />,
  },
)
