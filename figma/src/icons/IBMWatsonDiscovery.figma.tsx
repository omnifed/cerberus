import figma from '@figma/code-connect'
import { IBMWatsonDiscovery } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMWatsonDiscovery,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-81',

  {
    imports: ["import { IBMWatsonDiscovery } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMWatsonDiscovery size={props.size} />,
  },
)
