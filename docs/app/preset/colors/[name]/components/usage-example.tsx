import { Button, Field, Input, Label, Tag } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'

const highlightedStyles = {
  _highlighted: {
    outline: '4px solid',
    outlineColor: 'success.border.initial',
    outlineOffset: '2',
  },
}

interface UsageExampleProps {
  token: string
}

export default function UsageExample(props: UsageExampleProps) {
  return (
    <div
      {...(props.token.includes('neutral-surface') && {
        'data-highlighted': true,
      })}
      className={css({
        bgColor: 'neutral.surface.100',
        shadow: 'lg',
        p: '4',
        rounded: 'xl',
        ...highlightedStyles,
      })}
    >
      <p
        {...(props.token.includes('neutral-surface') && {
          'data-highlighted': true,
        })}
        className={css({
          pb: '2 !important',
          ...highlightedStyles,
        })}
      >
        Surface
      </p>

      <div>
        <Tag
          className={css({
            ...highlightedStyles,
          })}
          {...(props.token.includes('neutral-bg') && {
            'data-highlighted': true,
          })}
        >
          Static Tag
        </Tag>
      </div>

      <form
        {...(props.token.includes('neutral-surface') && {
          'data-highlighted': true,
        })}
        className={vstack({
          alignItems: 'flex-start',
          bgColor: 'neutral.surface.200',
          rounded: 'xl',
          p: '4',
          mt: '8',
          ...highlightedStyles,
        })}
      >
        <Field>
          <Label
            className={css({
              ...highlightedStyles,
            })}
            {...(props.token.includes('neutral-text') && {
              'data-highlighted': true,
            })}
            htmlFor="example"
          >
            Label
          </Label>
          <Input
            className={css({
              ...highlightedStyles,
            })}
            {...(props.token.includes('neutral-border') && {
              'data-highlighted': true,
            })}
            id="example"
            placeholder="Placeholder"
          />
        </Field>

        <div className={hstack()}>
          <Button
            className={css({
              ...highlightedStyles,
            })}
            {...(props.token.includes('danger-bg') && {
              'data-highlighted': true,
            })}
            palette="danger"
          >
            Cancel
          </Button>
          <Button
            className={css({
              ...highlightedStyles,
            })}
            {...(props.token.includes('action-bg') && {
              'data-highlighted': true,
            })}
          >
            Action
          </Button>
        </div>
      </form>
    </div>
  )
}
