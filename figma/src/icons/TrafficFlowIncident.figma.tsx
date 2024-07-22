import figma from '@figma/code-connect'
import { TrafficFlowIncident } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  TrafficFlowIncident,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-967',

  {
    imports: ["import { TrafficFlowIncident } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <TrafficFlowIncident size={props.size} />,
  },
)
