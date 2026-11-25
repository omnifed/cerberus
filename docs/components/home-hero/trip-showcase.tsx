'use client'

import {
  ArrowRight,
  Currency,
  DogWalker,
  Fire,
  Map as MapIcon,
  PauseFilled,
  PlayFilledAlt,
  RainScattered,
  SailboatOffshore,
  Snowflake,
  StormTracker,
  WarningFilled,
} from '@carbon/icons-react'
import {
  Admonition,
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  Field,
  FileStatus,
  FileUploader,
  IconButton,
  Input,
  NumberInput,
  Popover,
  ProgressBar,
  Radio,
  RadioGroup,
  Rating,
  Switch,
  Tag,
  Textarea,
  processStatus,
} from '@cerberus-design/react'
import { type ComponentProps, type PropsWithChildren } from 'react'
import { css, cx } from 'styled-system/css'
import { HStack, VStack } from 'styled-system/jsx'
import { type TripCard, type TripState } from './trip-script'
import { useTripTimeline } from './use-trip-timeline'

type AvatarGradient = ComponentProps<typeof Avatar>['gradient']

const STATUS_STAGES: { icon: typeof MapIcon; gradient: AvatarGradient }[] = [
  { icon: MapIcon, gradient: 'charon-light' },
  { icon: Fire, gradient: 'amphiaraus-light' },
  { icon: DogWalker, gradient: 'asphodel-light' },
  { icon: Snowflake, gradient: 'amphiaraus-dark' },
  { icon: SailboatOffshore, gradient: 'nyx-light' },
  { icon: RainScattered, gradient: 'thanatos-dark' },
  { icon: StormTracker, gradient: 'hades-light' },
]

const FERRY_NAMES = [
  { value: 'mcferryface', label: 'Ferry McFerryface' },
  { value: 'styx', label: 'Styx and Stones' },
  { value: 'pontoon', label: 'The Blood Price Pontoon' },
  { value: 'lethe', label: 'Lethe Go' },
]

export function TripShowcase() {
  const { state, patch, playing, togglePlaying, regionProps } =
    useTripTimeline()

  return (
    <section
      aria-labelledby="trip-showcase-title"
      className={css({
        bgColor: 'page.bg.initial/40',
        px: 'md',
        pb: 'xl',
        pt: 'md',
        md: { px: 'xl', pb: '2xl', pt: 'lg' },
        lg: { pl: '2xl', pr: 'lg', pb: '4xl' },
      })}
      {...regionProps}
    >
      <HStack justify="space-between" mb="md">
        <p
          id="trip-showcase-title"
          className={css({ color: 'page.text.initial', textStyle: 'label-sm' })}
        >
          Live demo: one ferry trip, built from Cerberus components
        </p>
        <IconButton
          ariaLabel={playing ? 'Pause the demo' : 'Play the demo'}
          onClick={togglePlaying}
          size="sm"
          usage="ghost"
        >
          {playing ? <PauseFilled /> : <PlayFilledAlt />}
        </IconButton>
      </HStack>

      <div
        className={css({
          display: 'grid',
          gap: 'md',
          gridTemplateColumns: 'minmax(0, 1fr)',
          md: { gap: 'lg', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
        })}
      >
        <VStack alignItems="stretch" gap="md">
          <QuoteCard state={state} patch={patch} />
          <TagsRow state={state} />
          <AssignCard state={state} patch={patch} />
          <BookedCard state={state} />
          <ProgressCard state={state} patch={patch} />
          <UploadCard state={state} patch={patch} />
        </VStack>

        <VStack alignItems="stretch" gap="md">
          <TripStatus state={state} />
          <ReviewCard state={state} patch={patch} />
          <VoteCard state={state} patch={patch} />
          <VoteResults state={state} />
        </VStack>
      </div>
    </section>
  )
}

interface CardProps {
  state: TripState
  patch: (next: Partial<TripState>) => void
}

const cardStyles = css({
  bgColor: 'page.surface.100',
  border: '1px solid',
  borderColor: 'page.border.initial',
  boxShadow: 'sm',
  rounded: 'md',
  transitionDuration: 'slow',
  transitionProperty: 'border-color, box-shadow',
  transitionTimingFunction: 'out',
  '&[data-live=true]': {
    borderColor: 'action.border.initial',
    boxShadow: 'md',
  },
})

/** Cards that stay on phones; the rest join from tablet up. */
const tabletUp = css({ display: 'none', md: { display: 'flex' } })

function Card(
  props: PropsWithChildren<{
    id: TripCard
    live: TripCard | null
    className?: string
    title?: string
    description?: string
  }>,
) {
  const titleId = `trip-${props.id}-title`
  return (
    <div
      aria-labelledby={props.title ? titleId : undefined}
      data-live={props.live === props.id}
      role={props.title ? 'group' : undefined}
      className={cx(
        cardStyles,
        css({ display: 'flex', flexDir: 'column', gap: 'lg', p: 'lg' }),
        props.className,
      )}
    >
      {props.title && (
        <div
          className={css({ display: 'flex', flexDir: 'column', gap: '2xs' })}
        >
          <p
            id={titleId}
            className={css({
              color: 'page.text.initial',
              textStyle: 'heading-2xs',
            })}
          >
            {props.title}
          </p>
          {props.description && (
            <p
              className={css({ color: 'page.text.200', textStyle: 'label-sm' })}
            >
              {props.description}
            </p>
          )}
        </div>
      )}
      {props.children}
    </div>
  )
}

function QuoteCard({ state, patch }: CardProps) {
  return (
    <Card
      id="quote"
      live={state.live}
      title="Charon’s ferry pickup dates"
      description="Add your info here and experience the capability of the underworld."
    >
      <div className={css({ maxW: '18rem' })}>
        <Field>
          <DatePicker
            selectionMode="range"
            value={state.dates}
            onValueChange={(details) => patch({ dates: details.value })}
          >
            <DatePicker.Label>Dates needed</DatePicker.Label>
            <DatePicker.RangeInputGroup />
            <DatePicker.Calendar />
          </DatePicker>
        </Field>
      </div>
      <div className={css({ maxW: '11rem' })}>
        <Field label="Seats needed">
          <NumberInput
            min={0}
            max={12}
            value={state.seats}
            onValueChange={(details) => patch({ seats: details.value })}
          />
        </Field>
      </div>
      <div>
        <Button
          onClick={() => patch({ quote: 'done' })}
          pending={state.quote === 'pending'}
          shape="sharp"
          usage="outlined"
        >
          {state.quote === 'done' ? 'Quote requested' : 'Request quote'}
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button>
      </div>
    </Card>
  )
}

function TagsRow({ state }: { state: TripState }) {
  const quoted = state.quote === 'done' || state.live === null
  return (
    <ul
      aria-label="Trip highlights"
      data-live={state.live === 'tags'}
      data-quoted={quoted}
      className={cx(
        tabletUp,
        css({
          alignItems: 'center',
          columnGap: 'xs',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          opacity: 0.55,
          rowGap: 'sm',
          transitionDuration: 'slow',
          transitionProperty: 'opacity',
          '&[data-quoted=true]': { opacity: 1 },
          xl: { flexWrap: 'nowrap' },
        }),
      )}
    >
      <li>
        <Tag palette="warning" shape="pill" usage="filled">
          <WarningFilled aria-hidden />
          Booking fast
        </Tag>
      </li>
      <li>
        <Tag palette="page" shape="pill" usage="filled">
          <Currency aria-hidden />
          Best price in town
        </Tag>
      </li>
      <li>
        <Tag palette="info" shape="pill" usage="filled">
          Smooth sailing
        </Tag>
      </li>
    </ul>
  )
}

function AssignCard({ state, patch }: CardProps) {
  return (
    <div
      data-live={state.live === 'assign'}
      className={cx(
        cardStyles,
        tabletUp,
        css({
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'md',
          p: 'md',
          rounded: 'sm',
        }),
      )}
    >
      <HStack gap="md">
        <Avatar alt="Charon" src="/home/charon-avatar.webp" size="md" />
        <div>
          <p className={css({ color: 'page.text.100', textStyle: 'label-sm' })}>
            Assigned to
          </p>
          <p
            className={css({
              color: 'page.text.initial',
              textStyle: 'heading-2xs',
            })}
          >
            Charon of Hades
          </p>
        </div>
      </HStack>
      <Switch
        checked={state.ready}
        onCheckedChange={(details) => patch({ ready: details.checked })}
      >
        Mark ready
      </Switch>
    </div>
  )
}

function BookedCard({ state }: { state: TripState }) {
  return (
    <div data-live={state.live === 'booked'}>
      {state.booked ? (
        <Admonition
          heading="Your trip has been booked"
          palette="success"
          usage="filled"
        >
          You’ll receive confirmation from the Hades back office within 2-3
          business days.
        </Admonition>
      ) : (
        <Admonition
          heading="No crossing booked yet"
          palette="page"
          usage="outlined"
        >
          Pick your dates and seats, then request a quote.
        </Admonition>
      )}
    </div>
  )
}

function ProgressCard({ state, patch }: CardProps) {
  return (
    <div
      data-live={state.live === 'progress'}
      className={cx(
        cardStyles,
        css({
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          p: 'md',
          rounded: 'sm',
        }),
      )}
    >
      <HStack justify="space-between">
        <p
          className={css({
            color: 'page.text.initial',
            textStyle: 'heading-2xs',
          })}
        >
          Trip progress
        </p>
        <p
          aria-hidden
          className={css({
            color: 'page.text.initial',
            fontFamily: 'mono',
            fontVariantNumeric: 'tabular-nums',
            textStyle: 'heading-xs',
          })}
        >
          {state.progress}%
        </p>
      </HStack>
      <ProgressBar
        id="trip-progress"
        label="Trip progress"
        now={state.progress}
        usage="rounded"
      />
      <Popover
        open={state.aboutOpen}
        onOpenChange={(details) => patch({ aboutOpen: details.open })}
        positioning={{ placement: 'bottom-start' }}
        trigger={
          <button
            type="button"
            className={css({
              alignSelf: 'flex-start',
              color: 'action.navigation.initial',
              cursor: 'pointer',
              rounded: 'xs',
              textDecoration: 'underline',
              textStyle: 'label-sm',
              textUnderlineOffset: '0.2em',
              _hover: { color: 'action.navigation.hover' },
              _focusVisible: { focusVisibleRing: 'outside' },
            })}
          >
            Boat details
          </button>
        }
      >
        <HStack gap="md" maxW="26rem" p="md">
          <Avatar
            fallback={<SailboatOffshore size={32} />}
            gradient="nyx-dark"
            size="lg"
          />
          <VStack alignItems="flex-start" gap="xs">
            <p className={css({ textStyle: 'heading-2xs' })}>About the ferry</p>
            <p className={css({ textStyle: 'body-sm' })}>
              The ferryman of the dead poles a skiff that carries the souls of
              the departed across the Acheron to the realm of Hades.
            </p>
          </VStack>
        </HStack>
      </Popover>
    </div>
  )
}

function UploadCard({ state, patch }: CardProps) {
  return (
    <div
      data-live={state.live === 'upload'}
      className={cx(tabletUp, css({ flexDir: 'column', minH: '14rem' }))}
    >
      {state.upload === null ? (
        <FileUploader
          accept="image/*"
          heading="Upload pics from your journey"
          name="journey-photos"
          w="full"
        />
      ) : (
        <div
          className={cx(
            cardStyles,
            css({
              display: 'flex',
              flexDir: 'column',
              gap: 'md',
              p: 'md',
              rounded: 'sm',
            }),
          )}
        >
          <p
            className={css({
              color: 'page.text.initial',
              textStyle: 'heading-2xs',
            })}
          >
            Pics from your journey
          </p>
          <FileStatus
            id="journey-photo"
            file="far-shore-sunrise.jpg"
            now={state.upload}
            onClick={() => patch({ upload: null })}
            status={
              state.upload === 100
                ? processStatus.DONE
                : processStatus.PROCESSING
            }
          />
        </div>
      )}
    </div>
  )
}

function TripStatus({ state }: { state: TripState }) {
  return (
    <div
      className={cx(
        tabletUp,
        css({
          alignItems: 'center',
          justifyContent: 'space-between',
          minH: '8',
        }),
      )}
    >
      <p
        className={css({
          color: 'page.text.initial',
          textStyle: 'heading-2xs',
        })}
      >
        Trip status
      </p>
      <ol
        aria-label={`Stage ${state.statusStep + 1} of ${STATUS_STAGES.length}`}
        className={css({ display: 'flex', gap: 'xs' })}
      >
        {STATUS_STAGES.map(({ icon: Icon, gradient }, i) => (
          <li
            key={`stage-${i}`}
            aria-hidden
            data-reached={i <= state.statusStep}
            className={css({
              opacity: 0.45,
              rounded: 'full',
              transitionDuration: 'slow',
              transitionProperty: 'opacity, box-shadow',
              '&[data-reached=true]': { opacity: 1 },
            })}
          >
            <Avatar fallback={<Icon />} gradient={gradient} size="sm" />
          </li>
        ))}
      </ol>
    </div>
  )
}

function ReviewCard({ state, patch }: CardProps) {
  return (
    <Card
      id="review"
      live={state.live}
      title="How would you rate your trip?"
      description="Your feedback helps us create a better experience for future riders."
    >
      <Rating
        label="Ride quality"
        value={state.rating}
        onValueChange={(details) => patch({ rating: details.value })}
      />
      <Field
        label="Additional feedback"
        helperText="Your info will not be shared with Charon"
      >
        <Textarea
          name="trip-feedback"
          placeholder="Tell Charon how the crossing went"
          value={state.feedback}
          onChange={(e) => patch({ feedback: e.target.value })}
        />
      </Field>
      <Checkbox
        checked={state.followUp}
        ids={{ control: 'trip-follow-up' }}
        onCheckedChange={(details) =>
          patch({ followUp: details.checked === true })
        }
        size="sm"
      >
        Let Hades follow up about my review
      </Checkbox>
      <div>
        <Button
          onClick={() => patch({ review: 'done' })}
          pending={state.review === 'pending'}
          shape="sharp"
        >
          {state.review === 'done' ? 'Review sent' : 'Submit review'}
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button>
      </div>
    </Card>
  )
}

function VoteCard({ state, patch }: CardProps) {
  return (
    <Card
      id="vote"
      live={state.live}
      className={tabletUp}
      title="We need to hear from the community!"
      description="Charon’s ferry needs a name and we want your help."
    >
      <RadioGroup
        aria-label="What should the new name be?"
        name="ferry-name"
        orientation="vertical"
        size="sm"
        value={state.vote}
        onValueChange={(details) => patch({ vote: details.value })}
      >
        <p
          aria-hidden
          className={css({ color: 'page.text.initial', textStyle: 'label-sm' })}
        >
          What should the new name be?
        </p>
        {FERRY_NAMES.map((name) => (
          <Radio key={name.value} value={name.value}>
            {name.label}
          </Radio>
        ))}
      </RadioGroup>
      <Field label="Write in answer">
        <Input
          name="ferry-write-in"
          placeholder="Your name for the ferry"
          size="sm"
          value={state.writeIn}
          onChange={(e) => patch({ writeIn: e.target.value })}
        />
      </Field>
      <div>
        <Button
          onClick={() => patch({ ballot: 'done' })}
          pending={state.ballot === 'pending'}
          shape="sharp"
          usage="outlined"
        >
          {state.ballot === 'done' ? 'Vote cast' : 'Cast your vote'}
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button>
      </div>
    </Card>
  )
}

function VoteResults({ state }: { state: TripState }) {
  const [mcFerryface, styx, other] = state.votes
  const shades = [
    css({ bgColor: 'action.bg.initial' }),
    css({ bgColor: 'action.bg.hover' }),
    css({ bgColor: 'action.bg.active' }),
  ]
  return (
    <div
      role="img"
      aria-label={`Votes so far: Ferry McFerryface ${mcFerryface}%, Styx and Stones ${styx}%, everything else ${other}%`}
      className={cx(
        tabletUp,
        css({
          border: '1px solid',
          borderColor: 'page.border.200',
          boxShadow: 'sm',
          h: '2.125rem',
          overflow: 'hidden',
          rounded: 'sm',
        }),
      )}
    >
      {state.votes.map((share, i) => (
        <span
          key={shades[i]}
          className={cx(
            shades[i],
            css({
              transitionDuration: 'slowest',
              transitionProperty: 'flex-grow',
              transitionTimingFunction: 'out',
            }),
          )}
          style={{ flexGrow: share }}
        />
      ))}
    </div>
  )
}
