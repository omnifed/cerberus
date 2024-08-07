export const modalBase = {
  alignSelf: 'safe center',
  bgColor: 'page.surface.100',
  mxi: 'auto',
  opacity: '0',
  rounded: 'md',
  shadow: 'lg',
  _backdrop: {
    bgColor: 'page.backdrop.initial',
    backdropFilter: 'blur(2px)',
    backdropBlur: 'sm',
  },
  _motionSafe: {
    animationName: 'fadeInDown',
    animationDuration: '250ms',
    animationTimingFunction: 'ease-in',
    animationFillMode: 'forwards',
  },
  _reduceMotion: {
    opacity: '1',
  },
}

export const modalHeading = {
  color: 'page.text.initial',
  textStyle: 'h4',
}
