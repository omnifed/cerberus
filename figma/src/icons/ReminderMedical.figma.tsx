import figma from '@figma/code-connect'
import { ReminderMedical } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ReminderMedical,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9619-925',

  {
    imports: ["import { ReminderMedical } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ReminderMedical size={props.size} />,
  },
)
