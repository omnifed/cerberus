import {
  Field,
  Select,
  type SelectProps,
  Option,
  createSelectCollection,
} from '@cerberus-design/react'

type BuilderSelectProps = Omit<SelectProps, 'collection'> & {
  options: string[]
}

export default function BuilderSelect(props: BuilderSelectProps) {
  const { options, id, label, ...nativeProps } = props
  const formattedOptions = options.map((option) => ({
    label: option,
    value: option,
  }))
  const collection = createSelectCollection(formattedOptions)

  return (
    <Field
      ids={{
        control: id,
      }}
      label={label}
    >
      <Select
        {...nativeProps}
        collection={collection}
        placeholder="Choose option"
      >
        {collection.items.map((item) => (
          <Option key={item.value} item={item} />
        ))}
      </Select>
    </Field>
  )
}
