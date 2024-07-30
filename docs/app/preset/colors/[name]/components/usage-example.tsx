import {
  Button,
  Field,
  FieldMessage,
  Input,
  Label,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tag,
} from '@cerberus-design/react'
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
  const isNeutralSurface = props.token.includes('neutral-surface')

  return (
    <div
      {...(isNeutralSurface && {
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
        {...(isNeutralSurface && {
          'data-highlighted': true,
        })}
        className={css({
          pb: '2 !important',
          textStyle: 'h3 !important',
          ...highlightedStyles,
        })}
      >
        Surface
      </p>

      <div
        className={hstack({
          mt: '1',
        })}
      >
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
        {...(isNeutralSurface && {
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
            describedBy="help:example"
            className={css({
              ...highlightedStyles,
            })}
            {...(props.token.includes('neutral-border') && {
              'data-highlighted': true,
            })}
            id="example"
            placeholder="Placeholder"
          />
          <FieldMessage id="help:example">
            This is an example of a field message.
          </FieldMessage>
        </Field>

        <div
          className={hstack({
            justify: 'space-between',
            mt: '4',
            w: 'full',
          })}
        >
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
              {...(props.token.includes('action') && {
                'data-highlighted': true,
              })}
            >
              Action
            </Button>
          </div>

          <Button
            {...(props.token.includes('action') && {
              'data-highlighted': true,
            })}
            className={css({
              ...highlightedStyles,
            })}
            type="button"
            usage="text"
          >
            Text Button
          </Button>
        </div>
      </form>

      <div
        className={css({
          mt: '6',
        })}
      >
        <Tabs active="tab-1" palette="secondaryAction">
          <TabList description="Example of color usage">
            <Tab
              {...(props.token.includes('secondaryAction') && {
                'data-highlighted': true,
              })}
              className={css({
                ...highlightedStyles,
              })}
              value="tab-1"
            >
              Tab 1
            </Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
          <TabPanel tab="tab-1">
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel tab="tab-2">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tab="tab-3">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
