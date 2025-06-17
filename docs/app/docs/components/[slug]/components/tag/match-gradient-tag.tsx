import { Tag, type TagProps } from '@cerberus-design/react'

type MatchGradientTagProps = TagProps

/**
 * Support styles that don't automatically match the gradient binding due to
 * the static nature of Panda-CSS.
 */
export default function MatchGradientTag(props: MatchGradientTagProps) {
  switch (props.gradient) {
    case 'charon-light':
      return (
        <Tag {...props} gradient="charon-light">
          {props.children}
        </Tag>
      )
    case 'nyx-dark':
      return (
        <Tag {...props} gradient="nyx-dark">
          {props.children}
        </Tag>
      )
    case 'amphiaraus-light':
      return (
        <Tag {...props} gradient="amphiaraus-light">
          {props.children}
        </Tag>
      )
    case 'styx-light':
      return (
        <Tag {...props} gradient="styx-light">
          {props.children}
        </Tag>
      )
    case 'styx-dark':
      return (
        <Tag {...props} gradient="styx-dark">
          {props.children}
        </Tag>
      )
    case 'thanatos-dark':
      return (
        <Tag {...props} gradient="thanatos-dark">
          {props.children}
        </Tag>
      )
    case 'hades-light':
      return (
        <Tag {...props} gradient="hades-light">
          {props.children}
        </Tag>
      )
    case 'asphodel-dark':
      return (
        <Tag {...props} gradient="asphodel-dark">
          {props.children}
        </Tag>
      )
    default:
      return <Tag {...props}>{props.children}</Tag>
  }
}
