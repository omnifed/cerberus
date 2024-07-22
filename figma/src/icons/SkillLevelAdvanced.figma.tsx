import figma from '@figma/code-connect'
import { SkillLevelAdvanced } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  SkillLevelAdvanced,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-1086',

  {
    imports: ["import { SkillLevelAdvanced } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <SkillLevelAdvanced size={props.size} />,
  },
)
