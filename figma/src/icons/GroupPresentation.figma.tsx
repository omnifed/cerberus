import figma from '@figma/code-connect'
import { GroupPresentation } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  GroupPresentation,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9427-5',

  {
    imports: ["import { GroupPresentation } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <GroupPresentation size={props.size} />,
  },
)
