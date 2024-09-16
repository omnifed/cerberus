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
  position: 'relative',
  _highlighted: {
    outline: '4px solid',
    outlineColor: 'success.border.initial',
    outlineOffset: '2',
    zIndex: 'overlay',
  },
}

interface UsageExampleProps {
  token: string
}

export default function UsageExample(props: UsageExampleProps) {
  const isPageSurface = props.token.includes('page-surface')
  const isBackdrop = props.token.includes('page-backdrop')
  const isText = props.token.includes('page-text')

  return (
    <div
      {...((isPageSurface || isBackdrop) && {
        'data-highlighted': true,
      })}
      className={css({
        bgColor: 'page.surface.100',
        shadow: 'lg',
        p: '4',
        rounded: 'xl',
        ...highlightedStyles,
      })}
    >
      <div
        {...(isText && {
          'data-highlighted': true,
        })}
        className={css({
          rounded: 'md',
          ...highlightedStyles,
        })}
      >
        <p
          className={css({
            pb: '2',
            textStyle: 'h3',
          })}
        >
          Page Heading
        </p>
      </div>

      <div
        className={hstack({
          mt: '1',
        })}
      >
        <Tag
          className={css({
            ...highlightedStyles,
          })}
          {...(props.token.includes('page-bg') && {
            'data-highlighted': true,
          })}
        >
          Static Tag
        </Tag>
        <Tag
          className={css({
            ...highlightedStyles,
          })}
          {...(props.token.includes('page-bg') && {
            'data-highlighted': true,
          })}
        >
          Static Tag
        </Tag>
      </div>

      <form
        {...(isPageSurface && {
          'data-highlighted': true,
        })}
        className={vstack({
          alignItems: 'flex-start',
          bgColor: 'page.surface.200',
          rounded: 'xl',
          p: '4',
          mt: '8',
          ...highlightedStyles,
        })}
      >
        <Field>
          <Label
            className={css({
              rounded: 'md',
              ...highlightedStyles,
            })}
            {...(props.token.includes('page-text') && {
              'data-highlighted': true,
            })}
            htmlFor="example"
          >
            Label
          </Label>
          <div
            {...(props.token.includes('page-border') && {
              'data-highlighted': true,
            })}
            className={css({
              rounded: 'md',
              w: 'full',
              ...highlightedStyles,
            })}
          >
            <Input
              describedBy="help:example"
              className={css(highlightedStyles)}
              id="example"
              placeholder="Placeholder"
            />
          </div>
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

      <div
        className={css({
          bgColor: 'page.backdrop.initial',
          backdropFilter: 'blur(4px)',
          backdropBlur: 'sm',
          bottom: '0',
          left: '0',
          position: 'absolute',
          rounded: 'xl',
          top: '0',
          transition: 'all 150ms ease-in-out',
          right: '0',
          zIndex: 'decorator',
        })}
      />
    </div>
  )
}