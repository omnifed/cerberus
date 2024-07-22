import figma from '@figma/code-connect'
import { SkillLevel } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SkillLevel,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1083',

  {
    imports: ["import { SkillLevel } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SkillLevel size={props.size} />,
  },
)
