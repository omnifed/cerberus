import figma from '@figma/code-connect'
import { ContentView } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  ContentView,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-75',

  {
    imports: ["import { ContentView } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <ContentView size={props.size} />,
  },
)
