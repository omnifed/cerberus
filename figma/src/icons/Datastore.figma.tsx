import figma from '@figma/code-connect'
import { Datastore } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Datastore,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9359-887',

  {
    imports: ["import { Datastore } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Datastore size={props.size} />,
  },
)
