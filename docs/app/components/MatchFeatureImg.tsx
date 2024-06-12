import Forms from './feature-art/forms'
import Menus from './feature-art/menu'
import TouchTarget from './feature-art/touch-target'
import Utilities from './feature-art/utilities'

export type MatchFeatureKind = 'touch-target' | 'forms' | 'menus' | 'utilities'

interface MatchFeatureImgProps {
  kind: MatchFeatureKind
}

export function MatchFeatureImg(props: MatchFeatureImgProps) {
  switch (props.kind) {
    case 'touch-target':
      return <TouchTarget />

    case 'forms':
      return <Forms />

    case 'menus':
      return <Menus />

    case 'utilities':
      return <Utilities />

    default:
      return null
  }
}
