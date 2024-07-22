import figma from '@figma/code-connect'
import { IBMCloudProjects } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  IBMCloudProjects,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9278-181',

  {
    imports: ["import { IBMCloudProjects } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <IBMCloudProjects size={props.size} />,
  },
)
