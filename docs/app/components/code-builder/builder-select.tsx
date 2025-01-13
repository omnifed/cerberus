import {
  Select,
  type SelectProps,
  Option,
  createSelectCollection,
} from '@cerberus-design/react'

type BuilderSelectProps = Omit<SelectProps, 'collection'> & {
  options: string[]
}

export default function BuilderSelect(props: BuilderSelectProps) {
  const { options, ...nativeProps } = props
  const formattedOptions = options.map((option) => ({
    label: option,
    value: option,
  }))
  const collection = createSelectCollection(formattedOptions)

  return (
    <Select
      {...nativeProps}
      collection={collection}
      label={nativeProps.label}
      placeholder="Choose option"
    >
      {collection.items.map((item) => (
        <Option key={item.value} item={item} />
      ))}
    </Select>
  )
}
