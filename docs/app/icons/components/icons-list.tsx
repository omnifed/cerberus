import * as Icons from '@cerberus-design/icons'

export default function IconsList() {
  return (
    <ul>
      {Object.entries(Icons).map(([name, Icon]) => (
        <li key={name}>
          <Icon />
          {name}
        </li>
      ))}
    </ul>
  )
}
